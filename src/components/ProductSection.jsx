// En este componente, creamos un carrusel de imágenes utilizando la librería react-slick.

// Importamos la función useRef de React para crear una referencia mutable que nos permitirá interactuar con el componente Slider de react-slick.
// PropTypes se importa para definir las propiedades esperadas para los componentes NextArrow y PrevArrow.
// También importamos el componente Slider de react-slick para crear el carrusel y los estilos asociados.

// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente reutilizable para representar cada diapositiva del carrusel.
const Slide = ({ imageSrc, alt }) => (
  <div className="h-screen">
    <img
      src={imageSrc}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

// Componente reutilizable para los botones de navegación.
const ArrowButton = ({ direction, onClick }) => (
  <button
    className={`absolute top-1/2 ${
      direction === "next" ? "right-0" : "left-0"
    } transform -translate-y-1/2 z-40 bg-black bg-opacity-50 text-white text-3xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-110`}
    onClick={onClick}
  >
    {direction === "next" ? ">" : "<"}
  </button>
);

// Componente principal del carrusel.
const MySlider = () => {
  // Utilizamos useRef para crear una referencia mutable que apunta al componente Slider.
  const sliderRef = useRef();

  // Configuración del carrusel.
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
  };

  // Estructura del componente del carrusel.
  return (
    <div>
      {/* Renderizamos el componente Slider con la configuración y la referencia. */}
      <Slider {...settings} ref={sliderRef}>
        {/* Cada Slide representa una diapositiva del carrusel. */}
        <Slide imageSrc="/src/images/slider3.jpg" alt="Slide 1" />
        <Slide imageSrc="/src/images/slider2.jpg" alt="Slide 2" />
      </Slider>
    </div>
  );
};

// Propiedades esperadas para los componentes NextArrow y PrevArrow.
ArrowButton.propTypes = {
  direction: PropTypes.oneOf(["next", "prev"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

// Propiedades esperadas para el componente Slide.
Slide.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// Exportamos el componente MySlider para su uso en otras partes de la aplicación.
export default MySlider;
