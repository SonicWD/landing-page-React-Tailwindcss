// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Atention = () => {
    return (
        <footer className="flex justify-around  items-center h-80 bg-black w-full">
            <div className="text-center p-8 text-white">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 text-4xl" />
                <h2 className="font-bold text-xl mt-4">EL CEIBO R.L.</h2>
                <p className="mt-2">Av XXX No00-00<br />Trinidad, Bolivia.</p>
            </div>
            <div className="text-center p-8 text-white">
                <FontAwesomeIcon icon={faClock} className="text-orange-500 text-4xl" />
                <h2 className="font-bold text-xl mt-4">HORARIOS DE ATENCION</h2>
                <p className="mt-2">Lunes a Viernes 08:00 - 20:00<br />Sábado 08:00 - 16:00</p>
            </div>
            <div className="text-center p-8 text-white">
                <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 text-4xl" />
                <h2 className="font-bold text-xl mt-4">Contacta con nosotros</h2>
                <p className="mt-2">Tel: +57 310 0000000<br />Correo: user@count.com</p>
            </div>
        </footer>
    );
};
export default Atention;
