import React from 'react';
import '../estilos/Modal.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <button className="absolute top-2 right-2" onClick={onClose}>Cerrar</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;

