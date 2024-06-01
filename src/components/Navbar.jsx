/** @jsxImportSource react */
//import React from 'react';
import logo from "/src/images/logo.png";

function redirectToWhatsApp() {
  const phoneNumber = "1234567890";
  const message = "¡Hola! Me gustaría hacer una consulta."; // Mensaje opcional
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.location.href = url;
}

function Navbar() {
  return (
    <nav
      style={{ height: "100px" }}
      className="backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10"
    >
      {" "}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold ">
            <img src={logo} alt="Logo" className="inline-block h-24 w-22 p-1" />
          </span>
          <div className="flex space-x-3 text-gray-900">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Promociones</a>
            <a href="#">Acerca de</a>
          </div>
          
          <div className="flex justify-center items-center  bg-gray-100">
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

export default Navbar;
