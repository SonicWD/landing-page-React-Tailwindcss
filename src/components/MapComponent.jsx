// MapComponent.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    function initMap() {
      var location = { lat: -14.831961631774902, lng: -64.90095520019531 };
      // eslint-disable-next-line no-unused-vars
      var map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
      });
    }

    const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
    if (existingScript) {
      console.warn('El script de Google Maps ya está cargado.');
      if (window.google && window.google.maps) {
        initMap();
      } else {
        existingScript.addEventListener('load', initMap);
      }
      return;
    }

    const script = document.createElement('script');
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error('No se encontró la clave de la API de Google Maps. Asegúrate de que la variable de entorno VITE_GOOGLE_MAPS_API_KEY esté configurada correctamente.');
      return;
    } else {
      console.log('Clave de API de Google Maps cargada correctamente.');
    }
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;

