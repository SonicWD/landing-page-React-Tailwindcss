// En este componente, creamos un carrusel de imágenes utilizando la librería react-slick.

// Importamos la función useRef de React para crear una referencia mutable que nos permitirá interactuar con el componente Slider de react-slick.
// PropTypes se importa para definir las propiedades esperadas para los componentes NextArrow y PrevArrow.
// También importamos el componente Slider de react-slick para crear el carrusel y los estilos asociados.

// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ imageSrc, alt, text1, text2, text3 }) => (
  <div className="h-screen relative">
    <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex justify-center items-center text-white text-lg px-4 py-2">
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 pl-8" style={{marginLeft: "-90px"}}>
        <div className="animated-text slide-left" style={{ fontFamily: 'Dancing Script', color: '#FFFFFF', fontSize: '40px', padding: '10px' }}>{text1}</div>
        <div className="animated-text slide-left delay-500" style={{ fontFamily: 'Rubik Mono One', color: '#FFFFFF', fontSize: '40px', padding: '10px' }}>{text2}</div>
        <div className="animated-text slide-left delay-1000" style={{ fontFamily: 'Rubik Mono One', color: '#FFFFFF', fontSize: '40px', padding: '10px' }}>{text3}</div>
        <button className="mt-8 bg-transparent border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition duration-300 animated-button slide-up">
          Ver Catálogo
        </button>
      </div>
    </div>
  </div>
);

Slide.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired, 
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};

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

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(["next", "prev"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

const MySlider = () => {
  const sliderRef = useRef();

  const slidesData = [
    {
      imageSrc: "/src/images/slider/slider3.jpg",
      alt: "Slide 1",
      text1: "El sabor más puro",
      text2: "los ingredientes más",
      text3: "selectos",
    },
    {
      imageSrc: "/src/images/slider/slider2.jpg",
      alt: "Slide 2",
      text1: "Ingredientes naturales",
      text2: "sabor excepcional",
      text3: "",
    },
  ];

  const restartAnimation = () => {
    const animatedTextElements = document.querySelectorAll(".animated-text");
    animatedTextElements.forEach((element) => {
      element.style.animation = "none";
      element.offsetHeight; /* trigger reflow */
      element.style.animation = null;
    });
  };

  const handleAfterChange = () => {
    restartAnimation();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ArrowButton direction="next" onClick={() => sliderRef.current.slickNext()} />,
    prevArrow: <ArrowButton direction="prev" onClick={() => sliderRef.current.slickPrev()} />,
    afterChange: handleAfterChange,
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            imageSrc={slide.imageSrc}
            alt={slide.alt}
            text1={slide.text1}
            text2={slide.text2}
            text3={slide.text3}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
