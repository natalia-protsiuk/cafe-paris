"use client";
import React, { useState, useEffect } from "react";

const images = [
  { src: "/images/table-with-glasses.jpg", alt: "Elegant restaurant interior" },
  { src: "/images/hero2.jpg", alt: "Delicious gourmet dish" },
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

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black bg-opacity-50">
        <div className="container mx-auto text-center">
          <div className="text-white mb-4 uppercase">Ласкаво просимо</div>
        </div>
        <h1 className="text-8xl font-bold mb-4">Café Paris</h1>
        <p className="text-2xl font-thin text-center max-w-6xl">
          {/* Спробуйте нашу авторську кухню, яка поєднує
          <br />
          вишукані смаки та сучасні тенденції! */}
          Ми працюємо більше ніж 20 років, створюючи незабутні гастрономічні
          враження для наших гостей.
          <br />
          Наш шеф-кухар майстерно поєднує традиції кулінарного мистецтва з
          сучасними смаками, додаючи авторський підхід до кожної страви.
          <br />
          {/* Ми пишаємося тим, що кожен наш рецепт унікальний, а атмосфера
          ресторану створює ідеальне місце для ваших особливих моментів. */}
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black font-bold hover:bg-gray-300 transition">
          Book a Table
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-4 w-4 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
