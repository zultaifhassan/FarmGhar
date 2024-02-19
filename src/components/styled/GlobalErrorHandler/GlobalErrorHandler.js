import React from "react";
import "./style.css";
const GlobalErrorHandler = ({ label }) => {
  return (
    <div className="global-empty-data-handler">
      <img src="/icons/error.png" alt="no data to show" />
      <p>{label}</p>
    </div>
  );
};

export default GlobalErrorHandler;
