import React, { useState, useEffect } from 'react';

const banners = 
  [
    {
      title: 'Classic',
      subtitle: 'BY NATURE',
      description: 'TIMELESS SNEAKER REIMAGINED INTO THE COMFIEST STAPLE YET',
      imageSrc: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-4-1.jpg?v=1721699624',
      textColor: 'text-amber-900',
      product: 'THE NEW WOOL PIPER GO',
      buttonText: ['SHOP MEN', 'SHOP WOMEN']
    },
    {
      title: 'Elevated',
      subtitle: 'BY NATURE',
      description: 'BOLD LIFTED SOLES ARE AN INSTANT OUTFIT UPGRADE.',
      imageSrc: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-4-3.jpg?v=1721699625',
      product: 'NEW LOUNGER LIFT',
      buttonText: ['SHOP WOMEN']
    }, {
      title: 'Elevated',
      subtitle: 'BY NATURE',
      description: 'BOLD LIFTED SOLES ARE AN INSTANT OUTFIT UPGRADE.',
      imageSrc: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-4-1.jpg?v=1721699624',
      product: 'NEW LOUNGER LIFT',
      buttonText: ['SHOP WOMEN']
    }
  
];

const ShoeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden mb-10">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${banner.imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="text-white text-right max-w-lg pr-16  h-full">
            {/* <div className="space-y-8">
            <h2 className="text-5xl font-serif">{banner.title}</h2>
            <p className="text-xl uppercase tracking-widest">{banner.subtitle}</p>
            <p className="text-sm uppercase">{banner.product}</p>
            <p className="text-lg">{banner.description}</p>
            <div className="flex space-x-4">
              {banner.buttonText.map((text, index) => (
                <button key={index} className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
                  {text}
                </button>
              ))}
            </div>
          </div> */}
            </div>
          </div>
        </div>
      ))}
      <div className="absolute right-1/2 bottom-0 transform -translate-y-1/2 flex flex-row space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={` rounded-full ${
              index === currentSlide ? ' w-2 h-2 bg-gray-400 scale-110' : 'w-2 h-2  bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoeSlider;