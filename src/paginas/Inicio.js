
import React from 'react';
import TextoImagen from '../componentes/TextoImagen';

//import TarjetaTexto from '../componentes/TarjetaTexto';
//import TarjetaProducto from './componenetes/TarjetasProducto';

function Inicio() {
  return (
    <div className="ContenedorPrincipal pt-5">
      <div className="text-center space-y-4 w-full h-screen bg-cover bg-center flex flex-col items-center justify-center" 
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/InicioImagenes/skate-park.jpg)` }}>
  <h1 className="text-6xl md:text-4xl lg:text-7xl font-bold text-yellow-400 drop-shadow-lg py-10 transform translate-x-[45%] translate-y-[-55%]">
    SKATE-SHOP
  </h1>
  <div className="border-t border-yellow-400 w-1/2 mt-4 transform translate-x-[45%] translate-y-[-14000%]"></div>
  <h2 className="text-lg md:text-1xl lg:text-1xl text-yellow-200 italic mt-4 transform translate-x-[45%] translate-y-[-550%]">
    Los mejores productos para los amantes del skate. 
  </h2>
</div>

      {/*Contenido de relleno para la pagina principal(Inicio)*/}
      <div className="bg-white flex flex-col items-center justify-center pt-20">
        <div className="ContenedorTxt1 flex items-center justify-center">
          <TextoImagen 
          titulo="Tablas"
          imgSrc={`${process.env.PUBLIC_URL}/imagenes/InicioImagenes/foto-1.jpg`}
          imgAlt="Productos"
          texto="Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Nemo exp"
          reverse={true} // Cambia el orden de la imagen y el texto
          />
        </div>
        <div className="ContenedorTxt2 flex items-center justify-center">
          <TextoImagen 
          titulo="Trucks"
          imgSrc={`${process.env.PUBLIC_URL}/imagenes/InicioImagenes/foto-2.jpg`}
          imgAlt="Productos"
          texto="Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Nemo expedita." 
          reverse={false} // Cambia el orden de la imagen y el texto
          /> 
        </div>
        <div className="ContenedorTxt3 flex items-center justify-center">
          <TextoImagen 
          titulo="Ropa y Mucho Mas.."
          imgSrc={`${process.env.PUBLIC_URL}/imagenes/InicioImagenes/foto-5.jpg`}
          imgAlt="Productos"
          texto="Explora nuestra amplia gama de productos para skaters..."
          reverse={true} // Cambia el orden de la imagen y el texto
          />
        </div>
      </div>
      <div className="pt-2">
        <div className="border-t border-Black w-full"></div>
      </div>
    </div>
  );
}

export default Inicio;