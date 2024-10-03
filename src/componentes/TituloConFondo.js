import React from 'react';

const TituloConFondo = ({ titulo, imagen, texto }) => {
  return (
    <div
      className="shadow-2xl w-[90%] h-60 bg-cover bg-center relative bg-cover bg-center relative overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-110"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="p-20 bg-black bg-opacity-50 h-60 absolute  left-0 w-full">        
        <h1 className="text-6xl font-bold text-white">{titulo}</h1>
        <p className="text-2 text-white">{texto}</p>
      </div>
    </div>
  );
};

export default TituloConFondo;
