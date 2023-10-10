import React, { ReactNode, useState } from 'react';

type ModalPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const ModalPopup = ({ isOpen, onClose, children }: ModalPopupProps) => {
  const modalStyle: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
  };

  return (
    <div style={modalStyle}>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalPopup;
