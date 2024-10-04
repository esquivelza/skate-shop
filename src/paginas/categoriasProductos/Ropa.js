import React, {useState} from 'react';
import ListaProducto from '../../componentes/ListaProducto';
import TituloConFondo from '../../componentes/TituloConFondo';
import Modal from '../../componentes/Modal'

const Ropa = () => {

  //logica para abrir y cerrar el modal
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

  //funcion para mostrar los productos, que estan en ListaProductos, se seleciona segun la categoria
  return (
    <div className="productos-container bg-white">
    <div className="border-t border-Black w-full"></div>
      	<div className="pt-4 flex justify-center">
      		<TituloConFondo 
        titulo="Ropa" 
        imagen={`${process.env.PUBLIC_URL}/imagenes/HeaderImagen/fondoTitulo2.jpg`}
     	texto="Importados de calidad y mucho mas"
     	 />
      </div>
	  <div className="p-3 pt-5">
      <div className="border-t border-Black w-full"></div>
        <div className="pt-4">
        <ListaProducto categoria="ropa" onProductoClick={abrirModal}/>
        
        {mostrarModal && (
        <Modal 
          onClose={cerrarModal} 
          producto={productoSeleccionado} 
        />
      )}
      </div>
      <div className="border-b p-5 border-Black w-full"></div>
	  </div>
    </div>
  );
}

export default Ropa;
