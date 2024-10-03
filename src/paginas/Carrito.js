
import React from 'react';
import TarjetaArticulo from '../componentes/TarjetaArticulo';
import TarjetaTotal from '../componentes/TarjetaTotal';
import '../estilos/Carrito.css';

const Carrito = ({ productosCarrito, eliminarDelCarrito, total, onCheckout }) => {
  return (
    <div className="absolute top-full right-0 mt-2 w-[300px] bg-white border rounded-md shadow-lg">
      <h2 className="text-lg font-bold p-4">Carrito de Compras</h2>
      <div className="lista-articulos p-4">
        {productosCarrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          productosCarrito.map((producto, index) => (
            <TarjetaArticulo 
              key={index}
              nombre={producto.nombre}
              precio={producto.precio}
              cantidad={producto.cantidad}
              imagen={producto.imagen}
              eliminarDelCarrito={() => eliminarDelCarrito(index)}
            />
          ))
        )}
      </div>
      {productosCarrito.length > 0 && (
        <div className="p-4">
          <TarjetaTotal total={total} onCheckout={onCheckout} />
        </div>
      )}
    </div>
  );
}

export default Carrito;

