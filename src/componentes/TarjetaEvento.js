import React from 'react';

const TarjetaEvento = ({ titulo, descripcion, fecha, imagen }) => {
  return (
    <div className="tarjeta-evento bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{titulo}</h2>
        <p className="text-gray-600 mb-4">{descripcion}</p>
        <p className="text-gray-500 font-semibold">{fecha}</p>
      </div>
    </div>
  );
};

export default TarjetaEvento;

