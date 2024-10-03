import React from 'react';
import ListaProducto from '../../componentes/ListaProducto'; 
import TituloConFondo from '../../componentes/TituloConFondo';
const Ruedas = () => {
  return (
    <div className="productos-container bg-white">
    <div className="border-t border-Black w-full"></div>
      	<div className="pt-4 flex justify-center">
      		<TituloConFondo 
        titulo="Ruedas" 
        imagen={`${process.env.PUBLIC_URL}/imagenes/HeaderImagen/fondoTitulo5.jpg`}
     	texto="Importados de calidad y mucho mas"
     	 />
      </div>
	  <div className="p-3 pt-5">
      <div className="border-t border-Black w-full"></div>
	  	<div className="pt-4">
        <ListaProducto categoria="ruedas" />
      </div> {/* filtrar productos por categoría que estan ListaProductos*/}
	  </div>
    </div>
  );
}

export default Ruedas;
