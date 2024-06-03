// eslint-disable-next-line no-unused-vars
import React from 'react';
const font= 'Rubik Mono One'
const News = () => {
  return (
    
    <div className="flex h-screen">
      {/* Panel izquierdo */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center">
        <div className="animated-text slide-left" style={{ fontFamily: 'Dancing Script', color: '#ca8e46', fontSize: '60px' }}>
          El auténtico sabor de Baures 
        </div>
        <div className="animated-text slide-left delay-500" style={{ fontFamily: 'Rubik Mono One', color: '#FFFFFF', fontSize: '40px' }}>
          en cada bocado
        </div>
      </div>
      
      {/* Panel derecho */}
      <div className="w-1/2 flex flex-col">
        <div className="w-full h-1/2 flex">
          <div className="relative w-1/2 h-full bg-gray-300">
            {/* Aquí iría la primera imagen */}
            <img src="/src/images/news/news1.jpg" alt="Imagen 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#ca8e46] bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"style={{ fontFamily: font }}>
            Del árbol
            </div>
          </div>
          <div className="relative w-1/2 h-full bg-gray-300">
            {/* Aquí iría la segunda imagen */}
            <img src="/src/images/news/news2.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#ca8e46] bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: font }}>
            a tu paladar
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 flex">
          <div className="relative w-1/2 h-full bg-gray-300">
            {/* Aquí iría la tercera imagen */}
            <img src="/src/images/news/news3.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#ca8e46] bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"style={{ fontFamily: font }}>
            todo hecho a mano
            </div>
          </div>
          <div className="relative w-1/2 h-full bg-gray-300">
            {/* Aquí iría la cuarta imagen */}
            <img src="/src/images/news/news4.jpg" alt="Imagen 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#ca8e46] bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"style={{ fontFamily: font }}>
            y con amor 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
