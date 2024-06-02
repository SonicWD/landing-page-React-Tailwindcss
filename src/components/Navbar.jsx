// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import logo from "/src/images/logo2.jpg"; 

function Navbar() {
  // Define el estado isScrolled para controlar si el usuario ha hecho scroll
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      // Comprueba si se ha hecho scroll y actualiza el estado isScrolled
      setIsScrolled(window.scrollY > 0); 
    };
    // Ejecuta la función handleScroll cuando el componente se monta
    handleScroll(); 
  // Añade un event listener para el evento de scroll, un listen para que apenas se modifique se actualize el estado 
    window.addEventListener("scroll", handleScroll); 

    return () => {
      // Limpia el event listener cuando el componente se desmonta
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <nav
      style={{ height: "95px" }} // Altura del Navbar
      className={`backdrop-filter sticky  top-0 z-10 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg" : "" // Aplica el desenfoque cuando el usuario ha hecho scroll
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex items-center justify-between">
          <span className="text-2xl text-gray-900 font-semibold">
            <img
              src={logo} 
              alt="Logo"
              className="inline-block h-24 w-22 p-1"
            />
          </span>
          <div className="flex space-x-3 text-white text-xl font-bold">
            <a href="#" className="ml-5">
              Inicio
            </a>
            <a href="#" className="ml-5">
              Productos
            </a>
            <a href="#" className="ml-5">
              Promociones
            </a>
            <a href="#" className="ml-5">
              Acerca de
            </a>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={redirectToWhatsApp} // Llama a la función redirectToWhatsApp 
              className="bg-customColor text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
//Funcion para anviar un mensaje de Whs
function redirectToWhatsApp() {
  const phoneNumber = "1234567890"; // Define el número de teléfono
  const message = "¡Hola! Me gustaría hacer una consulta."; // Define el mensaje predefinido
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent( // Crea la URL de redirección a Whs
    message
  )}`;
  window.location.href = url; // Redirige al usuario a Whs
}

export default Navbar; 
