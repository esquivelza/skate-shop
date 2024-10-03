import React from 'react';

//componenete para agregar productos como tarjetas, tiene css propio 
const TarjetaProducto = ({ nombre, precio, imagen, disponible, caracteristicas }) => {
  return (
    <div className="tarjeta-producto bg-white w-[auto] overflow-hidden m-1 hover:shadow-lg transition-shadow duration-300">
      {/* Imagen y Estado */}
      <div className="tarjeta-header relative p-3">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-[100%] object-cover"
        />
        <span 
          className={`badge absolute top-2 right-2 p-2 text-white text-sm rounded ${disponible ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {disponible ? 'Disponible' : 'Agotado'}
        </span>
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

/* Botón para Agregar al Carrito 
      <div className="tarjeta-footer p-2 justify flex items-center justify-center">
        <button 
          className={`w-200px p-2 font-arial text-white rounded-lg ${disponible ? 'bg-red-700 hover:bg-red-500' : 'bg-gray-500'}`} 
          disabled={!disponible}
        >
          {disponible ? 'Agregar al carrito' : 'Producto agotado'}
        </button>
      </div>
*/
