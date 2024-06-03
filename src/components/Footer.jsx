// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-5 bg-black border-t-2 border-black">
        <div className="text-left text-white">
            <h1 className="text-2xl font-bold">LA MORENITA</h1>
            <p className="italic">¡El auténtico sabor de Baures!</p>
        </div>
        
        <div className="text-center flex-grow text-white">
            <p>© Copyright 2024 LA MORENITA Todos los derechos reservados | Trinidad - Bolivia.</p>
        </div>
        
        <div className="flex gap-2 text-white">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} className="text-orange-500 text-xl transition-colors duration-300 hover:text-orange-300" /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} className="text-orange-500 text-xl transition-colors duration-300 hover:text-orange-300" /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} className="text-orange-500 text-xl transition-colors duration-300 hover:text-orange-300" /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faRss} className="text-orange-500 text-xl transition-colors duration-300 hover:text-orange-300" /></a>
        </div>
    </footer>
);
};

export default Footer;
