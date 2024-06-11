// MapComponent.jsx
// eslint-disable-next-line no-unused-vars
// MapComponent.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Función para inicializar y cargar el mapa
    function initMap() {
      // Ubicación del mapa
      var location = { lat: -14.831961631774902, lng: -64.90095520019531 };
      // Crear un mapa nuevo
      // eslint-disable-next-line no-unused-vars
      var map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
      });
    }

    // Cargar la API de Google Maps
    const script = document.createElement('script');
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    window.initMap = initMap; // Hacer que la función initMap esté disponible globalmente
    document.head.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
