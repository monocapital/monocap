"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    projectName: "",
    contactEmail: "",
    preferredFunding: "10-20K",
    additionalInfo: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 touch-none"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-md relative overflow-hidden shadow-xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="p-5 md:p-6">
          {!submitted ? (
            <>
              <h2 className="text-xl font-medium mb-4">Apply for Funding</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Project Name</label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      placeholder="Your project name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Contact Email</label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Preferred Funding</label>
                    <select
                      name="preferredFunding"
                      value={formData.preferredFunding}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                      required
                    >
                      <option value="10-20K">$10K - $20K</option>
                      <option value="20-50K">$20K - $50K</option>
                      <option value="50-100K">$50K - $100K</option>
                      <option value="Custom">Custom Amount</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2 text-sm min-h-[80px]"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white rounded-md py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="text-green-500 text-4xl mb-4">✓</div>
              <h2 className="text-xl font-medium mb-2">Application Received</h2>
              <p className="text-gray-600 mb-6">Thank you for your interest. We'll review your application and contact you soon.</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
