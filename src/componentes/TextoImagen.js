import React from 'react';

const TextoImagen = ({ titulo, subtitulo, texto, imgSrc, imgAlt, reverse }) => {
  return (
    <div className={`flex shadow-xl ${reverse ? 'flex-row-reverse bg-yellow-300' : 'bg-green-400'} items-center h-3/6 w-11/12 justify-self-center`}>
      {/* Imagen */}
      <div className={`w-auto shadow-2xl ${reverse ? 'translate-x-[-20%] translate-y-[-20%]' : 'translate-x-[20%] translate-y-[-10%]'}`}>
        <img className="w-auto object-cover h-80" src={imgSrc} alt={imgAlt} />
      </div>
      {/* Texto */}
      <div className={`w-1/2 ${reverse ? 'translate-x-[-30%]' : 'translate-x-[30%]'} px-4`}>
        <h2 className="text-2xl font-bold">{titulo}</h2>
        <h3 className="text-lg text-gray-600">{subtitulo}</h3>
        <p className="text-base text-gray-700">{texto}</p>
      </div>
    </div>
  );
};

export default TextoImagen;


