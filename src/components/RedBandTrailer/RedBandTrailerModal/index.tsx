import React, { useEffect, useState, useRef, FC, ReactNode } from 'react';

import './RedBandTrailerModal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose,children }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isOpen);
  }, [isOpen]);

  const contentRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        (contentRef.current?.parentNode as HTMLElement)?.classList.remove('active');
        onClose();
    };
  

  return (
    <div  className={`modal ${active ? 'active' : ''}`} onClick={closeModal}>
      <div className="modal__content__close ">
            ❌
      </div>

      <div ref={contentRef} className="modal__content">
        {children}
      </div>
    </div>
  );
};
