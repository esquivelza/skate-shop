import React from 'react';

const people = [
  {
    name: 'Esquivel Zabaleta Norvin Jose',
    role: '10923758',
    imageUrl:
      '',
  },
  {
    name: 'Integrante2',
    role: '123456789',
    imageUrl:
      '',
  },
  {
    name: 'Integrante2',
    role: '123456789',
    imageUrl:
      '',
  },
  {
    name: 'Integrante2',
    role: '123456789',
    imageUrl:
      '',
  },
]

function Nosotros() {
  return (
  	<div>
  	<div className="border-t border-Black w-full"></div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Equipo 10</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Desarrollo de una aplicación web para la gestion de una tienda en linia de productos de skate.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}


export default Nosotros;
