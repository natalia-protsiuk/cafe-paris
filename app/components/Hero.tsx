"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const images = [
  { src: "/images/table-with-glasses.jpg", alt: "Elegant restaurant interior" },
  { src: "/images/hero-image.jpg", alt: "Delicious gourmet dish" },
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
          aria-hidden={index !== currentImageIndex}
        >
          <span className="sr-only">{image.alt}</span>
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black bg-opacity-50 px-4 sm:px-8 text-center">
        <div className="mb-4 text-sm sm:text-base md:text-lg uppercase tracking-wide">
          Ласкаво просимо
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Café Paris
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-light max-w-md sm:max-w-2xl md:max-w-3xl leading-relaxed text-white">
          Ми працюємо понад 20 років, створюючи незабутні гастрономічні враження
          для наших гостей. Наш шеф-кухар майстерно поєднує традиції кулінарного
          мистецтва із сучасними смаками, додаючи авторський підхід до кожної
          страви.
          <br />
          Для ваших свят ми пропонуємо комфортні банкетні зали: на першому
          поверсі — до 100 гостей, на другому — до 20 гостей.
        </p>

        <Link
          href="#contact"
          className="mt-8 px-6 py-3 bg-white text-black text-base sm:text-lg font-semibold rounded hover:bg-gray-300 transition"
        >
          Забронювати
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
