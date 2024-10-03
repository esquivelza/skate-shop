import React from 'react';

const TarjetaArticulo = ({ nombre, precio, cantidad, imagen, eliminarDelCarrito }) => {
  return (
    <div className="tarjeta-articulo flex items-center gap-4 border p-4 rounded-md shadow-md">
      <img src={imagen} alt={nombre} className="w-16 h-16 object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{nombre}</h3>
        <p className="text-sm text-gray-600">Cantidad: {cantidad}</p>
        <p className="text-lg font-bold text-primary">${(precio * cantidad).toFixed(2)}</p>
      </div>
      <button 
        onClick={eliminarDelCarrito}
        className="bg-red-500 text-white p-2 rounded-md"
      >
        Eliminar
      </button>
    </div>
  );
}

export default TarjetaArticulo;
