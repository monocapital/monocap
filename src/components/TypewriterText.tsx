"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseBetweenWords?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  speed = 100,
  deleteSpeed = 70,
  pauseBetweenWords = 1200,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typingPaused, setTypingPaused] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const typeCharacter = () => {
      if (typingPaused) return;

      if (isDeleting) {
        // Deleting
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setTypingPaused(true);

          timeoutRef.current = setTimeout(() => {
            setTypingPaused(false);
          }, pauseBetweenWords);

          return;
        }

        setDisplayText(displayText.slice(0, -1));
        timeoutRef.current = setTimeout(typeCharacter, deleteSpeed);
      } else {
        // Typing
        if (displayText === currentWord) {
          setTypingPaused(true);

          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            setTypingPaused(false);
          }, pauseBetweenWords);

          return;
        }

        setDisplayText(currentWord.slice(0, displayText.length + 1));
        timeoutRef.current = setTimeout(typeCharacter, speed);
      }
    };

    timeoutRef.current = setTimeout(typeCharacter,
      typingPaused ? pauseBetweenWords : isDeleting ? deleteSpeed : speed
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseBetweenWords, typingPaused]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      <span className="typewriter-cursor"></span>
    </span>
  );
};

export default TypewriterText;
