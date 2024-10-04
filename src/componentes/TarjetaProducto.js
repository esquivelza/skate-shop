import React from 'react';
//componenete para agregar productos como tarjetas 
const TarjetaProducto = ({ nombre, precio, imagen, caracteristicas, onClick }) => {
  return (
    <div className="tarjeta-producto cursor-pointer bg-white w-[auto] overflow-hidden m-1 hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
      {/* Imagen */}
      <div className="tarjeta-header relative p-3">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-[100%] object-cover"
        />
      </div>
      
      {/* Detalles del Producto */}
      <div className="tarjeta-content  p-2">
        <h3 className="text-lg font-bold mb-2">{nombre}</h3>
        <div className="flex justify-between mt-4">
          {caracteristicas.map((caracteristica, index) => (
            <div key={index} className="flex flex-col items-center">
              {caracteristica.icono}
              <span className="text-xs mt-1">{caracteristica.texto}</span>
            </div>
          ))}
          <p className="text-2xl font-bold text-red-400">${precio.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default TarjetaProducto;

