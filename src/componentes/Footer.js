import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';  // Librería de iconos

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Columna 1: Información de la tienda */}
          <div>
            <h5 className="text-xl font-bold uppercase mb-4">Sobre Nosotros</h5>
            <p className="text-sm text-gray-400">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident ab consequuntur neque enim. Temporibus voluptates, amet hic sit at ex impedit repellendus accusamus nostrum sed illum doloremque rem suscipit.
            </p>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div>
            <h5 className="text-xl font-bold uppercase mb-4">Enlaces Rápidos</h5>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-gray-200">Inicio</a></li>
              <li><a href="/Productos/Tablas" className="text-gray-400 hover:text-gray-200">Productos</a></li>
              <li><a href="/Eventos" className="text-gray-400 hover:text-gray-200">Eventos</a></li>
              <li><a href="/Nosotros" className="text-gray-400 hover:text-gray-200">Nosotros</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Redes Sociales */}
          <div>
            <h5 className="text-xl font-bold uppercase mb-4">Síguenos</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; 2024 SkateShop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
