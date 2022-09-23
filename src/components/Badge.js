import React from "react";
import "./badge.css";

function Badge({ children }) {
  return (
    <div data-testid="badges">
      <h5>
        <span className="badge">{children}</span>
      </h5>
    </div>
  );
}

export default Badge;
