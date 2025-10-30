import { GeneratePDF } from "./GeneratePDF";
import React, { useState } from "react";
import "./ExportPDF.scss";

export default function ExportPDF({ items }) {
  const MAX_LENGTH = 30;
  const NEAR_MAX = 25;
  const [businessName, setBusinessName] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/^\s+/, "").slice(0, MAX_LENGTH);
    setBusinessName(value);
  };

  const handleDownload = () => {
    if (!businessName.trim()) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 800); // hide warning after animation
      return;
    }
    GeneratePDF(businessName.trim(), items);
    setBusinessName(""); // clear input after download
  };

  return (
    <div className="export-pdf-container">
      <input
        type="text"
        placeholder="Enter your business name"
        value={businessName}
        onChange={handleInputChange}
        maxLength={MAX_LENGTH}
        className="business-input"
      />
      <div
        className={`char-counter ${
          businessName.length >= NEAR_MAX ? "warning" : ""
        }`}
      >
        {businessName.length} / {MAX_LENGTH} characters
      </div>

      <button
        onClick={handleDownload}
        className={`download-btn ${showWarning ? "shake" : ""}`}
      >
        Download PDF
      </button>

      {showWarning && (
        <div className="warning-text">You must enter a business name!</div>
      )}
    </div>
  );
}
