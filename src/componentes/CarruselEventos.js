import React, { useState, useEffect } from 'react';

const CarruselEventos = ({ eventos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar de slide automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventos.length);
    }, 5000); // 5 segundos
    return () => clearInterval(interval);
  }, [eventos.length]);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % eventos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + eventos.length) % eventos.length);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Contenedor de imágenes y texto */}
      {eventos.map((evento, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${evento.imagen})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute bottom-20 left-10 text-white p-6">
              <h1 className="text-6xl font-bold mb-4">{evento.titulo}</h1>
              <p className="text-2xl mb-4">{evento.descripcion}</p>
              <p className="text-lg font-semibold">{evento.fecha}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Flechas de navegación */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 hover:bg-opacity-70">
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 hover:bg-opacity-70">
        &#10095;
      </button>
    </div>
  );
};

export default CarruselEventos;
