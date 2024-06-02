import React, { useEffect, useState } from "react";
import logo from "/src/images/logo.png"; // Asegúrate de que la ruta sea correcta

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
//Funcion que utiliza las variable de js para que cuando detecto el scroll aplique la opaques en el nvar 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{ height: "95px" }}//Altura del NavBar
      className={`backdrop-filter backdrop-blur-lg sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-opacity-70 bg-[#F8F4E1]" : "bg-opacity-30"
      }`}//Aca se puede cambiar el color de NavBar
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl text-gray-900 font-semibold">
            <img src={logo} alt="Logo" className="inline-block h-24 w-22 p-1" />
          </span>
          <div className="flex space-x-3 text-gray-900 text-xl">
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
              onClick={redirectToWhatsApp}
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
//Funcion pare redirijir a whas, al emsaje que se ponga en la variable phoneNumber
function redirectToWhatsApp() {
  const phoneNumber = "1234567890";
  const message = "¡Hola! Me gustaría hacer una consulta.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.location.href = url;
}

export default Navbar;
