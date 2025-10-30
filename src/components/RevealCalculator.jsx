import React, { useState } from "react";
import "./RevealCalculator.scss";
import ProfitCalculator from "./ProfitCalculator";
import Navbar from "./Navbar";

export default function RevealCalculator() {
  const [showChild, setShowChild] = useState(false);

  return (
    <div>
      <Navbar label="HOME" path="/" />

      <div className="reveal-parent">
        <button className="reveal-btn" onClick={() => setShowChild(!showChild)}>
          {showChild ? "HIDE CALCULATOR" : "SHOW CALCULATOR"}
        </button>

        {showChild && (
          <div className="child-container">
            <ProfitCalculator />
          </div>
        )}
      </div>
    </div>
  );
}
