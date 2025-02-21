'use client';
import { useState } from 'react';

const images = [
  './foto1.jpg',
  './foto2.jpg',
  './foto3.jpg',
  './foto4.jpg',
  './foto5.jpg',
  './foto6.jpg',
  './foto7.jpg',
  './foto8.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      style={{ height: '800px' }}
    >
      {/* Imagens */}
      <div
        className=" h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="h-full w-full h-64 object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Botão Esquerda */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Botão Direita */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
