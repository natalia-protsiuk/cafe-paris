"use client";
import React, { useState, useEffect } from "react";

const images = [
  { color: "bg-red-500" },
  { color: "bg-blue-500" },
  { color: "bg-green-500" },
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
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          } ${image.color}`}
        />
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-6xl font-bold mb-4">Welcome to Café Paris</h1>
        <p className="text-xl">Experience fine dining with our seasonal menu</p>
        <button className="mt-8 px-6 py-3 bg-white text-black font-bold hover:bg-gray-300 transition">
          Book a Table
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-4 w-4 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
