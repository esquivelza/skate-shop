import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Carrito from '../paginas/Carrito';
//import Modal from './Modal';
//import Formulario from './Formulario';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate


const Header = ({ productosCarrito }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  //const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [subMenuAbierto, setSubMenuAbierto] = useState(false);
  const [mostrarCarritoTimeout, setMostrarCarritoTimeout] = useState(null);

  let subMenuTimer;

  const navigate = useNavigate();

  const handleRegistroClick = () => {
    navigate('/registro'); 
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const showSubMenu = () => {
    clearTimeout(subMenuTimer);
    setSubMenuAbierto(true);
  };

  const hideSubMenu = () => {
    subMenuTimer = setTimeout(() => {
      setSubMenuAbierto(false);
    }, 300);
  };

  // Funciones para mostrar/ocultar con retraso
  const showCarrito = () => {
    clearTimeout(mostrarCarritoTimeout);
    setMostrarCarrito(true);
  };

  const hideCarrito = () => {
    const timeoutId = setTimeout(() => {
      setMostrarCarrito(false);
    }, 300); 
    setMostrarCarritoTimeout(timeoutId);
  };

  useEffect(() => {
    return () => {
      clearTimeout(mostrarCarritoTimeout);
      clearTimeout(subMenuTimer); 
    };
  }, );

  return (
    <header className="flex justify-between items-center p-2.5 bg-white shadow-2xl">
      {/* Logo / Imagen */}
      <img className="h-14 w-14 object-cover rounded-full" src={`${process.env.PUBLIC_URL}/imagenes/HeaderImagen/logo.jpg`} alt="logo-imagen" />

      {/* Botón de hamburguesa (solo visible en pantallas pequeñas) */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-zinc-950">
          {menuAbierto ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú de navegación (oculto en pantallas pequeñas) */}
      <nav className={`lg:flex items-center h-full ${menuAbierto ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 text-lg">
          <li>
            <Link className="no-underline text-zinc-950 font-mono hover:text-Ultimate-Gray transition-colors" to="/">Inicio</Link>
          </li>
          <span className="hidden lg:inline-block">|</span> {/* Separador */}
          <li 
            className="relative cursor-pointer"
            onMouseEnter={showSubMenu}
            onMouseLeave={hideSubMenu}
          >
            <span className="no-underline text-zinc-950 font-mono hover:text-Ultimate-Gray transition-colors">Productos</span>
            {/* Submenú de Productos */}
            {subMenuAbierto && (
              <ul 
                className="absolute left-0 top-full mt-2 bg-neutral-50 border rounded shadow-md w-40 z-50" 
                onMouseEnter={showSubMenu} 
                onMouseLeave={hideSubMenu}
              >
                <li>
                  <Link className="no-underline block px-4 py-2 text-Black hover:bg-gray-200" to="/Productos/Tablas">Tablas</Link>
                </li>
                <li>
                  <Link className="no-underline block px-4 py-2 text-Black hover:bg-gray-200" to="/Productos/Ruedas">Ruedas</Link>
                </li>
                <li>
                  <Link className="no-underline block px-4 py-2 text-Black hover:bg-gray-200" to="/Productos/Trucks">Trucks</Link>
                </li>
                <li>
                  <Link className="no-underline block px-4 py-2 text-Black hover:bg-gray-200" to="/Productos/Ropa">Ropa</Link>
                </li>
                <li>
                  <Link className="no-underline block px-4 py-2 text-Black hover:bg-gray-200" to="/Productos/Accesorios">Accesorios</Link>
                </li>
              </ul>
            )}
          </li>
          <span className="hidden lg:inline-block">|</span> {/* Separador */}
          <li>
            <Link className="no-underline text-zinc-950 font-mono hover:text-Ultimate-Gray transition-colors" to="/Eventos">Eventos</Link>
          </li>
          <span className="hidden lg:inline-block">|</span> {/* Separador */}
          <li>
            <Link className="no-underline text-zinc-950 font-mono hover:text-Ultimate-Gray transition-colors" to="/Nosotros">Nosotros</Link>
          </li>
        </ul>
      </nav>

      {/* Iconos de carrito y registro */}
      <div className="flex items-center space-x-6">
        {/* Carrito */}
        <div 
          className="relative cursor-pointer z-50" 
          onMouseEnter={showCarrito} 
          onMouseLeave={hideCarrito}
        >
          <FaShoppingCart className=" text-zinc-950 hover:text-Ultimate-Gray transition-colors" size={24} />
          {productosCarrito.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {productosCarrito.length}
            </span>
          )}
          {mostrarCarrito && (
            <div 
              className="" 
              onMouseEnter={showCarrito} 
              onMouseLeave={hideCarrito}
            >
              <Carrito 
                productosCarrito={productosCarrito} 
                eliminarDelCarrito={() => {}} 
                total={0} 
                onCheckout={() => {}} 
              />
            </div>
          )}
        </div>

        {/* Registro */}
        <div className="relative cursor-pointer" onClick={handleRegistroClick}>
          <FaUser className="text-zinc-950 hover:text-Ultimate-Gray transition-colors" size={24} />
        </div>
      </div>
    </header>
  );
}

export default Header;



