import React, {useState} from 'react';
import ListaProducto from '../../componentes/ListaProducto';
import TituloConFondo from '../../componentes/TituloConFondo';
import Modal from '../../componentes/Modal'

const Tablas = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setProductoSeleccionado(null);
  };

  return (
    <div className="productos-container bg-white">
    <div className="border-t border-Black w-full"></div>
      	<div className="pt-4 flex justify-center">
      		<TituloConFondo 
        titulo="Tablas" 
        imagen={`${process.env.PUBLIC_URL}/imagenes/HeaderImagen/fondoTitulo.jpg`}
     	  texto="Importados de calidad y mucho mas"
       />
      </div>
	  <div className="p-3 pt-5">
      <div className="border-t border-Black w-full"></div>
	  <div className="pt-4">
        <ListaProducto categoria="tablas" onProductoClick={abrirModal}/>
        {mostrarModal && (
        <Modal 
          onClose={cerrarModal} 
          producto={productoSeleccionado} 
        />
      )}
    <div className="border-b p-5 border-Black w-full"></div>
    </div>
    </div>
    </div>
  );
}

export default Tablas;
