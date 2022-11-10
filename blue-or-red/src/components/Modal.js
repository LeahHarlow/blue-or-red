import React from 'react';
import { useEffect } from 'react';

const Modal = ({ onClose, children }) => {
  //hitting the escape key or clicking in the grey will exit modal
  useEffect(() => {
    const listener = (e) => {
      console.log(e);
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keyup', listener);
    return () => {
      document.removeEventListener('keyup', listener);
    };
  }, []);

  return (
    <div id='modal-container' onClick={() => onClose()}>
      <div
        id='modal-content'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
