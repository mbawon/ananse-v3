import React from "react";
import "./alert-modal.css";

const AlertModal = ({ title, children, toggleAlert }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-content">
        <div className="alert-header">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AlertModal;
