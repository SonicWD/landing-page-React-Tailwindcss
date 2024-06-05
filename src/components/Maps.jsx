// eslint-disable-next-line no-unused-vars
import React from 'react';
import MapComponent from './MapComponent';

const fontPrimary = 'Dancing Script'; // Fuente principal
const fontSecondary = 'Rubik Mono One'; // Fuente secundaria
const primaryColor = '#ca8e46'; // Color primario
const secondaryColor = '#FFFFFF'; // Color secundario
const bgColor = 'bg-black'; // Clase de Tailwind para el color de fondo negro
const fontSizeLarge = '60px'; // Tamaño de fuente grande
const fontSizeMedium = '40px'; // Tamaño de fuente mediano


const Maps = () => {
  return (
    <div className="flex flex-wrap">
      {/* Mapa a la izquierda */}
      <div className="w-full md:w-1/2">
        <MapComponent />
      </div>
      
      {/* Textos a la derecha */}
      <div className={`w-full md:w-1/2 ${bgColor} text-white flex flex-col justify-center items-center p-4 md:p-0`}>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="animated-text slide-left" style={{ fontFamily: fontPrimary, color: primaryColor, fontSize: fontSizeLarge }}>
            Nos puedes encontrar 
          </div>
          <div className="animated-text slide-left delay-500" style={{ fontFamily: fontSecondary, color: secondaryColor, fontSize: fontSizeMedium }}>
            Aca
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Maps;
