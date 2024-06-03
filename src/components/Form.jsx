import React from 'react';

// Variables globales para estilos
const fontPrimary = 'Dancing Script'; // Fuente principal
const fontSecondary = 'Rubik Mono One'; // Fuente secundaria
const primaryColor = '#ca8e46'; // Color primario
const secondaryColor = '#FFFFFF'; // Color secundario
const bgColor = 'bg-ca8e46'; // Color de fondo para el contenedor principal
const fontSizeLarge = '60px'; // Tamaño de fuente grande
const fontSizeMedium = '40px'; // Tamaño de fuente mediano

// Componente principal que representa la sección de noticias
const News = () => {
  return (
    <div className={`flex h-screen ${bgColor}`}>
      {/* Contenedor principal */}
      <div className="w-full flex justify-center items-center">
        {/* Panel izquierdo con texto */}
        <div className="w-1/2 text-white flex flex-col justify-center items-center bg-back">
          <div className="animated-text slide-left" style={{ fontFamily: fontPrimary, color: primaryColor, fontSize: fontSizeLarge }}>
            ¿En qué te podemos
          </div>
          <div className="animated-text slide-left delay-500" style={{ fontFamily: fontSecondary, color: secondaryColor, fontSize: fontSizeMedium }}>
            ayudar?
          </div>
        </div>

        {/* Panel derecho con formulario */}
        <div className="w-1/2 flex flex-col justify-center items-center">
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
    </div>
  );
};

// Exportación del componente News
export default News;
