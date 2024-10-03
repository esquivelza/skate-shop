import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import Tablas from './paginas/categoriasProductos/Tablas';
import Ruedas from './paginas/categoriasProductos/Ruedas';
import Trucks from './paginas/categoriasProductos/Trucks';
import Ropa from './paginas/categoriasProductos/Ropa';
import Accesorios from './paginas/categoriasProductos/Accesorios';
import Eventos from './paginas/Eventos';
import Nosotros from './paginas/Nosotros';
import Carrito from './paginas/Carrito';
import Registro from './paginas/Registro';
//import Verificacion from './paginas/Verificacion';


function App() {
  const [productosCarrito, setProductosCarrito] = useState([]); //gestiona los productos del carrito

  // Funciones para manejar el carrito
  const eliminarDelCarrito = (index) => {
    setProductosCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const onCheckout = () => {
    
  }; // Lógica para el checkout

  const total = productosCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

  return (
    <Router>
      <Header productosCarrito={productosCarrito} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Productos/Tablas" element={<Tablas />} />
        <Route path="/Productos/Ruedas" element={<Ruedas />} />
        <Route path="/Productos/Trucks" element={<Trucks />} />
        <Route path="/Productos/Ropa" element={<Ropa />} />
        <Route path="/Productos/Accesorios" element={<Accesorios />} />
        <Route path="/Eventos" element={<Eventos />} /> 
        <Route path="/Nosotros" element={<Nosotros />} /> 
        <Route path="/Registro" element={<Registro />} />
         <Route path="/carrito" element={
          <Carrito 
            productosCarrito={productosCarrito} 
            eliminarDelCarrito={eliminarDelCarrito} 
            total={total} 
            onCheckout={onCheckout} 
          />
        } /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
