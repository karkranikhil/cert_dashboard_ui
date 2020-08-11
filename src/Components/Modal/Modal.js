import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ handleClose, show, children }) {
  const showHideClassName = show
    ? "capgi-modal display-block"
    : "capgi-modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="btn btn-warning btn-float" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default Modal;
