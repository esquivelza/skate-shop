import React from 'react';
import ListaProducto from '../../componentes/ListaProducto';
import TituloConFondo from '../../componentes/TituloConFondo';

const Trucks = () => {
  return (
    <div className="productos-container bg-white">
    <div className="border-t border-Black w-full"></div>
      	<div className="pt-4 flex justify-center">
      		<TituloConFondo 
        titulo="Trucks" 
        imagen={`${process.env.PUBLIC_URL}/imagenes/HeaderImagen/fondoTitulo3.jpg`}
     	texto="Importados de calidad y mucho mas"
     	 />
      </div>
	  <div className="p-3 pt-5">
	  	<div className="border-t border-Black w-full"></div>
      <div className="pt-4">
        <ListaProducto categoria="trucks" />
      </div>
	  </div>
    </div>
  );
}

export default Trucks;
