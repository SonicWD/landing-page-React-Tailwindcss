/** @jsxImportSource react */
//import React from 'react';

function Footer() {
  return (
    <footer className="text-xs bg-zinc-800 text-white text-center p-36 ml-1">
      <div>
        <ul>
          <li>
            <strong>Direccion: </strong>Calle x #nnnn Esquina ,{' '}
          </li>
          <li>
            <strong>Telefono: </strong>+573203989839
          </li>
          <li>
            <strong>Pais: </strong>Trinidad, Bolivia
          </li>
        </ul>
      </div>
      <div>
        <a href="https://cipca.org.bo/analisis-y-opinion/reportajes/beni-se-la-juega-por-su-cacao-uno-de-los-mejores-del-mundo">
          politica y privacidad
        </a>
        <a href="https://www.google.com">Más información</a>
        <p>&copy; 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
