import React, { useRef, useEffect, useState } from 'react';
import './DemoModal.css';

const DemoModal = ({ isOpen, hasCloseBtn = true, onClose, hasEscKey, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null)

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (!hasEscKey) return;
    if (event.key === 'Escape') {
      event.preventDefault()
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} 
      onKeyDown={handleKeyDown} 
      className="demo-modal"
    >
      {hasCloseBtn && (
        <button className="demo-modal-close-btn" onClick={handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};

export default DemoModal;
