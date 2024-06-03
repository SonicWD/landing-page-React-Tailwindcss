// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

// Variables globales para estilos
const fontPrimary = 'Dancing Script'; // Fuente principal
const fontSecondary = 'Rubik Mono One'; // Fuente secundaria
const primaryColor = '#ca8e46'; // Color primario
const secondaryColor = '#FFFFFF'; // Color secundario
const bgColor = 'bg-black'; // Clase de Tailwind para el color de fondo negro
const hoverBgColor = '#ca8e46'; // Color de fondo al hacer hover
const hoverOpacity = 'bg-opacity-50'; // Opacidad del fondo al hacer hover
const fontSizeLarge = '60px'; // Tamaño de fuente grande
const fontSizeMedium = '40px'; // Tamaño de fuente mediano
const fontSizeHover = '2rem'; // Tamaño de fuente para el texto en hover

// Componente que renderiza una imagen con texto superpuesto al hacer hover
const ImageWithHoverText = ({ src, alt, text }) => (
  <div className="relative w-1/2 h-full bg-gray-300">
    {/* Imagen */}
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    {/* Texto que aparece al hacer hover */}
    <div
      className={`absolute inset-0 flex items-center justify-center bg-[${hoverBgColor}] ${hoverOpacity} text-white opacity-0 hover:opacity-100 transition-opacity duration-300`}
      style={{ fontFamily: fontPrimary, fontSize: fontSizeHover }}
    >
      {text}
    </div>
  </div>
);

// Validación de propiedades del componente ImageWithHoverText
ImageWithHoverText.propTypes = {
  src: PropTypes.string.isRequired, // La propiedad src es obligatoria y debe ser una cadena
  alt: PropTypes.string.isRequired, // La propiedad alt es obligatoria y debe ser una cadena
  text: PropTypes.string.isRequired, // La propiedad text es obligatoria y debe ser una cadena
};

// Componente principal que representa la sección de noticias
const News = () => {
  return (
    <div className="flex h-screen">
      {/* Panel izquierdo con texto */}
      <div className={`w-1/2 ${bgColor} text-white flex flex-col justify-center items-center`}>
        <div className="animated-text slide-left" style={{ fontFamily: fontPrimary, color: primaryColor, fontSize: fontSizeLarge }}>
          El auténtico sabor de Baures
        </div>
        <div className="animated-text slide-left delay-500" style={{ fontFamily: fontSecondary, color: secondaryColor, fontSize: fontSizeMedium }}>
          en cada bocado
        </div>
      </div>

      {/* Panel derecho con imágenes */}
      <div className="w-1/2 flex flex-col">
        <div className="w-full h-1/2 flex">
          <ImageWithHoverText src="/src/images/news/news1.jpg" alt="Imagen 1" text="Del árbol" />
          <ImageWithHoverText src="/src/images/news/news2.jpg" alt="Imagen 2" text="a tu paladar" />
        </div>
        <div className="w-full h-1/2 flex">
          <ImageWithHoverText src="/src/images/news/news3.jpg" alt="Imagen 3" text="todo hecho a mano" />
          <ImageWithHoverText src="/src/images/news/news4.jpg" alt="Imagen 4" text="y con amor" />
        </div>
      </div>
    </div>
  );
};

// Exportación del componente News
export default News;
