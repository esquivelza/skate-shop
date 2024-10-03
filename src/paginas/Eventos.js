import React from 'react';
import CarruselEventos from '../componentes/CarruselEventos'; 

const Eventos = () => {
  const eventos = [
    {
      titulo: 'Competencia de Skate 2024',
      descripcion: 'Únete a nosotros para una emocionante competencia de skate con premios increíbles.',
      fecha: '12 de octubre de 2024',
      imagen: '/imagenes/InicioImagenes/foto-5.jpg',
    },
    {
      titulo: 'Torneo de Skaters Pro',
      descripcion: 'Un evento que reúne a los mejores skaters profesionales del país.',
      fecha: '20 de noviembre de 2024',
      imagen: '/imagenes/InicioImagenes/foto-6.jpg',
    },
    {
      titulo: 'Skate Festival',
      descripcion: 'Disfruta de un día lleno de skate, música y diversión.',
      fecha: '18 de diciembre de 2024',
      imagen: '/imagenes/InicioImagenes/foto-7.jpg',
    },
  ];

  return (
    <div>
      <CarruselEventos eventos={eventos} />
      <div className="pt-4 pb-0">
        <div className="border-t border-Black w-full"></div>
    </div>
    </div>
  );
};

export default Eventos;

