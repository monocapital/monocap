"use client";

import { useEffect, useRef, useState } from "react";
import "../app/about/success-metrics.css";

interface MetricProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  animationDelay: string;
}

const Metric = ({ value, label, prefix = "", suffix = "", animationDelay }: MetricProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const valueIncrement = value / totalFrames;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const newValue = Math.min(Math.ceil(valueIncrement * frame), value);
      setCurrentValue(newValue);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className={`metric-item ${isVisible ? `fade-in-animation ${animationDelay}` : ""}`}
    >
      <div className="metric-value">
        {prefix}
        {currentValue.toLocaleString()}
        {suffix}
      </div>
      <div className="metric-label">{label}</div>
    </div>
  );
};

export default function SuccessMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`metrics-container ${isVisible ? 'fade-in-animation' : ''}`}
    >
      <Metric
        value={4}
        label="Years Experience"
        animationDelay="delay-100"
      />
      <Metric
        value={100}
        label="Successful Investments"
        suffix="+"
        animationDelay="delay-200"
      />
      <Metric
        value={150}
        prefix="$"
        label="Funds Given"
        suffix="K+"
        animationDelay="delay-300"
      />
      <Metric
        value={10}
        label="Founders Served"
        suffix="+"
        animationDelay="delay-400"
      />
    </div>
  );
}
