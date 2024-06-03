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
        ¿En qué te podemos
        </div>
        <div className="animated-text slide-left delay-500" style={{ fontFamily: fontSecondary, color: secondaryColor, fontSize: fontSizeMedium }}>
        ayudar?
        </div>
      </div>

      {/* Panel derecho con formulario */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-black">
      <form className="w-full max-w-sm bg-white rounded-lg p-6">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">Nombre:</label>
              <input type="text" id="name" name="name" className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">Correo electrónico:</label>
              <input type="email" id="email" name="email" className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 text-sm font-semibold mb-2">Mensaje:</label>
              <textarea id="message" name="message" rows="4" className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4"></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300">Enviar</button>
          </form>
      </div>
    </div>
  );
};

// Exportación del componente News
export default News;
