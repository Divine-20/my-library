import React from "react";
const ReusableModal = ({ isOpen, onClose, children, size = "xl" }) => {
  return (
    <div
      className={`modal ${isOpen ? "show" : "hide"}`}
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={onClose}
    >
      <div
        className={`modal-content modal-${size}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing on child click
      >
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default ReusableModal;
