import React, { useState } from 'react';
import { TbX } from 'react-icons/tb'; // Importamos un icono para cerrar el modal

const Modal = ({ onClose, producto, disponible }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleAgregarAlCarrito = () => {
    console.log(`Agregado ${cantidad} de ${producto.nombre} al carrito`);
    onClose(); // Cerrar el modal después de agregar
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* Contenedor del modal */}
      <div className="bg-white rounded-lg p-5 max-w-2xl w-full mx-5 relative">
        {/* Botón para cerrar */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
          <TbX size={24} />
        </button>
        
        {/* Contenido del modal con layout flex */}
        <div className="flex flex-col md:flex-row">
          
          {/* Imagen del producto */}
          <div className="md:w-1/3 flex justify-center">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-auto object-cover rounded-md" />
          </div>
          
          {/* Información del producto */}
          <div className="md:w-2/3 md:pl-6 flex flex-col justify-between">
            {/* Nombre del producto */}
            <h2 className="text-lg font-bold mb-2">{producto.nombre}</h2>
            
            {/* Descripción */}
            <p className="text-xs md:text-sm text-gray-700 mb-2">{producto.descripcion}</p>
            
            {/* Selección de cantidad y talla */}
            <div className="flex items-center space-x-4 mt-4">
              <label htmlFor="cantidad" className="mr-2">Cantidad:</label>
              <input
                type="number"
                id="cantidad"
                min="1"
                max={producto.disponible ? 10 : 0} // Límite según disponibilidad del producdoto
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="border rounded p-1 w-16"
              />
            </div>
            
            {/* Botón para agregar al carrito */}
            <div className="mt-4 flex items-center space-x-4">
              <button 
                onClick={handleAgregarAlCarrito} 
                className={`px-4 py-2 text-white rounded-lg ${producto.disponible ? 'bg-green-700 hover:bg-green-500' : 'bg-red-500'}`} 
                disabled={!producto.disponible}
              >
                {producto.disponible ? 'Agregar al carrito' : 'Producto agotado'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

