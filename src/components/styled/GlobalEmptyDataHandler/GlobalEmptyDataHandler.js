import React from "react";
import "./style.css";
const GlobalEmptyDataHandler = ({ label, position = "absolute" }) => {
  return (
    <div className="global-empty-data-handler" style={{ position: position }}>
      <img src="/icons/empty.png" alt="no data to show" />
      <p>{label}</p>
    </div>
  );
};

export default GlobalEmptyDataHandler;
