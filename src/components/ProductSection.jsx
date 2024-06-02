// En este componente quise hacer un carrusel de imágenes utilizando react-slick.
// Importamos useRef desde React para crear una referencia mutable que nos permite interactuar con el componente Slider de react-slick xd
// PropTypes se importa para definir las propiedades que se esperan para los componentes NextArrow y PrevArrow.
// Slider se importa de react-slick para crear el carrusel.
// También importamos los estilos de react-slick.

// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// La función MySlider representa el componente del carrusel.

function MySlider() {
  // Usamos useRef para crear una referencia mutable que apunta al componente Slider.
  const sliderRef = useRef();

  // Definimos las configuraciones del carrusel.
  const settings = {
    dots: true, // Muestra los puntos.
    infinite: true, // Hace que el carrusel sea un loop
    speed: 500, // Velocidad de la animación al cambiar de imagen.
    slidesToShow: 1, // Número de imágenes a mostrar a la vez.
    slidesToScroll: 1, // Número de imágenes para desplazarse con cada cambio.
    autoplay: true, // Reproducción automática.
    autoplaySpeed: 5000, // Velocidad de reproducción 
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow /> 
  };

  // Devolvemos la estructura del componente del carrusel.
  return (
    <div className="relative">
      {/* Renderiza el componente Slider con las configuraciones y la referencia. */}
      <Slider {...settings} ref={sliderRef}>
        {/* Cada div representa una diapositiva del carrusel. */}
        <div className="bg-black w-full h-screen flex items-center justify-center">
          {/* Dentro de cada diapositiva, colocamos una imagen con un estilo específico. */}
          <img
            src="/src/images/slider4.jpg"
            alt="Slide 1"
            className="w-full max-h-[calc(100vh-50px)] object-cover"
          />
        </div>
        <div className="bg-black w-full h-screen flex items-center justify-center">
          <img
            src="/src/images/slider2.jpg"
            alt="Slide 3"
            className="w-full max-h-[calc(100vh-50px)] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

// Componentes NextArrow y PrevArrow son componentes funcionales que representan los botones de navegación del carrusel.

// NextArrow es el botón de siguiente.
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-40 bg-black bg-opacity-50 text-white text-3xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-110"
    onClick={onClick}
  >
    {">"}
  </button>
);

// PrevArrow es el botón de anterior.
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-40 bg-black bg-opacity-50 text-white text-3xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-110"
    onClick={onClick}
  >
    {"<"}
  </button>
);

// Definimos las propiedades para los componentes NextArrow y PrevArrow.
NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

// Exportamos el componente MySlider para su uso en otras partes de la aplicación.
export default MySlider;
