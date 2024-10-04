import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import { Star } from 'lucide-react';
import { TbSkateboarding } from 'react-icons/tb'; // Importa los iconos
import '../estilos/ListaProducto.css';

const ListaProducto = ({ categoria, onProductoClick }) => {
  
  const productos = [
    // tablas
    {
      nombre: "Alien Workshop Brainwash",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-alien-workshop-brainwash-85-.jpg",
      disponible: true,
      categoria: "tablas", // categoria del producto, con esto se selecciona a los productos
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "April Guy 1990",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-april-guy-1990-83.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "April Og Logo",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-april-og-logo-photo-85.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "April Yuto",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-april-yuto-2021-80.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "April Yuto (82)",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-april-yuto-2021-82.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Copal Revolucion",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-copal-revolucion-chiapas.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "DeathWish",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-deathwish-trials-facchini-81.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Girl x Pac Man Bennett",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-girl-x-pac-man-bennett-82.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Gx1000",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-gx1000-og-logo-green-81.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Ludica Nature",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-ludica-nature-82.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Taco Acuatizaje",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-taco-acuatizaje-82.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "The Heated Wheel",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-the-heated-wheel-coria-teatime-83.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Toy Machine",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-toy-machine-martin-monster-82.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Tricolor X",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-tricolor-x-el-rotulista-md-popsicle-angel-foil-80.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Zero Misfits",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-zero-misfits-fiend-skull-collage-red-85.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Toy Machine",
      precio: 120.99,
      imagen: "../../imagenes/tablas/tabla-toy-machine-martin-monster-82.jpg",
      disponible: true,
      categoria: "tablas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    //ruedas
    {
      nombre: "Deza Azul",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-deza-ruleta-azul-conica-54mm-99duro.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Deza Morada",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-deza-ruleta-morada-conica-54mm-99duro.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Hub Planeta Tierra",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-hub-planeta-tierra-52mm-duro-99.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Oj Wheels",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-oj-wheels-vianna-tamtam-elite-hardline-54mm-99a.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Rata Head",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-rata-head-orange-orange-55mm-duro-99.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Rata Pro",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-rata-pro-series-domador-de-cobras-blancas-60mm-duro-101.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "SpitFire Black",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-spitfire-formula-four-radial-black-52mm-99du.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "SpitFire Natural",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-spitfire-formula-four-radials-natural-54mm-93du.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Taco 3D",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-taco-3d-54mm-duro99.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Taco Pop",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-taco-pop-56mm-duro99.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Travel On Weed",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-travel-on-weed-56-mm-duro-99.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Travel On Wheels X",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-travel-on-wheels-x-glitch-signal-58mm-duro99.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Yoyo Abstractas",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-yoyo-abstractas.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Yoyo Fernan",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-yoyo-fernan-origel.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Yoyo Oscar",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-yoyo-oscar-meza.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "SpitFire Black",
      precio: 50.99,
      imagen: "../../imagenes/ruedas/ruedas-spitfire-formula-four-radial-black-52mm-99du.jpg",
      disponible: true,
      categoria: "ruedas",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    //ropa
    {
      nombre: "Bermuda Copal",
      precio: 30.50,
      imagen: "../../imagenes/ropa/bermuda-copal-khaki.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Bermuda Copal",
      precio: 30.50,
      imagen: "../../imagenes/ropa/bermuda-copal-negra-.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Caps black",
      precio: 30.50,
      imagen: "../../imagenes/ropa/gorra-classic-caps-black-denim-.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "X Shepard",
      precio: 30.50,
      imagen: "../../imagenes/ropa/gorra-classic-x-shepard-black.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Vans Easy",
      precio: 30.50,
      imagen: "../../imagenes/ropa/gorra-vans-easy-patch-camper-brown-sugar.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Carpintero Puas",
      precio: 30.50,
      imagen: "../../imagenes/ropa/pantalon-benzaa-carpintero-puas.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Lona Cargo",
      precio: 30.50,
      imagen: "../../imagenes/ropa/pantalon-benzaa-lona-cargo-navy.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Lona Cargo",
      precio: 30.50,
      imagen: "../../imagenes/ropa/pantalon-benzaa-lona-cargo-negro.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Benzaa Pockt",
      precio: 30.50,
      imagen: "../../imagenes/ropa/playera-benzaa-pocket-grey.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "87 Swirl Fill",
      precio: 30.50,
      imagen: "../../imagenes/ropa/playera-spitfire-classic-87-swirl-fill-charcoal-.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Swirl Overlat",
      precio: 30.50,
      imagen: "../../imagenes/ropa/playera-spitfire-classic-swirl-overlay-black-white-grey-.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Ying Yang",
      precio: 30.50,
      imagen: "../../imagenes/ropa/playera-spitfire-ying-yang-forest-pocket-.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Vans Blade Heart",
      precio: 30.50,
      imagen: "../../imagenes/ropa/playera-vans-skate-blade-heart.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Baker Brand",
      precio: 30.50,
      imagen: "../../imagenes/ropa/sudadera-baker-brand-logo-dark-green.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Santa Cruz Crewneck",
      precio: 30.50,
      imagen: "../../imagenes/ropa/sudadera-santa-cruz-crewneck-screaming-wave.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Thrasher SkateGoat",
      precio: 30.50,
      imagen: "../../imagenes/ropa/sudadera-thrasher-skategoat-black.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Casta",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-casta-propaganda-fidel-negro.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "DC Deep Forest",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-dc-manteca-4-sn-mx-deep-forest.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Hey Dog K9",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-hey-dog-k9-negro-rasta.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Nike Sb Dunk Low",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-nike-sb-dunk-low-pro-black-white.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Nike Sb Dunk",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-nike-sb-dunk-low-pro-city-of-cinema.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Nike Sb Heritage",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-nike-sb-heritage-vulc-black-white.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Nike Sb Zoom Janoski",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-nike-sb-zoom-janoski-og-black-white.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Vans Authentic ",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-vans-skate-authentic-pro-black-white.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Vans Gilbert Crockett",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-vans-skate-gilbert-crockett-hi-pro-decon-blue.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    {
      nombre: "Vans Old Skool",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-vans-skate-old-skool-pro-navy-white.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Vans Sk8 Hi Pro",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-vans-skate-sk8-hi-pro-navy-white.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },

    {
      nombre: "Vans Slip",
      precio: 30.50,
      imagen: "../../imagenes/ropa/tenis-vans-skate-slip-on-pro-black-and-white.jpg",
      disponible: true,
      categoria: "ropa",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "3 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Estándar" },
      ]
    },
    //accesorios
    {
      nombre: "Baleros Ace",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/baleros-ace-high-performance.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Baleros Fkd Yoshi",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/baleros-fkd-yoshi-tanenbaum.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Baleros Pig",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/baleros-pig-wheels-neon.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Baleros Yoyo",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/baleros-yoyo-max-barrera-abec-9.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Elevadores Independet",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/elevadores-independent-shock-pads-18-black.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Gomas Independent hard",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/gomas-independent-cushions-hard-94-black.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Gomas Independent hard",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/gomas-independent-cushions-medium-90a-red-soft.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Herramienta Pig",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/herramienta-pig-olivo.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Herramienta Shivers",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/herramienta-shivers-llave-t-roja.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Lija Negra",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/lija-negra-lisa-.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Lija Shake",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/lija-shake-junt-og-spray.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Lija SpitFire",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/lija-spitfire-bighead-pool-side.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Lija Negra",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/lija-negra-lisa-.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Lija Transparente",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/lija-transparente-lisa.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Rieles Pig",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/rieles-pig-olive.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Rieles Pif Rojo",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/rieles-pig-red.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Rieles Pig Blanco",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/rieles-pig-white.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Devil Dark",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/the-original-tail-devil-dark.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Tornillos Independent",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/tornillos-independent-phillips-125.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Tornillos Travel",
      precio: 15.99,
      imagen: "../../imagenes/accesorios/tornillos-travel-on-wheels-negros.jpg",
      disponible: true,
      categoria: "accesorios",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    //truck
    {
      nombre: "Ace Classic",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-ace-classic-low-polished-77.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Hysteeria Krusty Hollow hi",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-hysteria-krusty-hollow-hi-149mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Hysteria Leon Rasta",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-hysteria-leon-rasta-base-amarillo-147-mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Hysteria Logo Azul",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-hysteria-logo-azul-negro.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Hysteria Logo Rojo",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-hysteria-logos-rojo-147mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Hysteria Ruega",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-hysteria-ruega-por-hysteria-base-blanca-147-mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Independent Bauhaus",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-independent-bauhaus-polished-silver-mid-144mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Independent Forged",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-independent-forged-hollow-mid-149mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Independent Stage 11 Blackout",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-independent-stage-11-blackout-standard-139mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Independent Stage 11 Forget",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-independent-stage-11-forged-hollow-btg-summit-silver-black-159mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Shivers Nava",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-shivers-nava-azul-149mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Sindicato Ms2",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-sindicato-ms2-og-logo-puas-147mm.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Venture Team",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-trucks-venture-team-green.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Venture All",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-venture-all-polished-52.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Vulkan Sirena",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-vulkan-sirena-825.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
    {
      nombre: "Venture Team",
      precio: 15.99,
      imagen: "../../imagenes/trucks/trucks-trucks-venture-team-green.jpg",
      disponible: true,
      categoria: "trucks",
      caracteristicas: [
        { icono: <Star size={25}/>, texto: "4.5 Estrellas" },
        { icono: <TbSkateboarding size={25}/>, texto: "Envío Gratis" },
      ]
    },
  ];

  // Filtra los productos según la categoría
  const productosFiltrados = categoria ? productos.filter(p => p.categoria === categoria) : productos;

  return (
    <div className="lista-productos flex flex-wrap gap-4">
      {productosFiltrados.map((producto, index) => (
        <TarjetaProducto 
          key={index}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
          disponible={producto.disponible}
          caracteristicas={producto.caracteristicas}
          descripcion={producto.descripcion}
          onClick={() => onProductoClick(producto)} //con un click llama a la funcion de la ventana modal
        />
      ))}
    </div>
  );
}

export default ListaProducto;