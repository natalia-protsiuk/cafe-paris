"use client";
import React, { useState, useEffect } from "react";

const reviews = [
  {
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque.",
    author: "Marie Smith",
    position: "The Smiths",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    author: "John Doe",
    position: "Gourmet Critic",
  },
  {
    text: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    author: "Anna Williams",
    position: "Food Blogger",
  },
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Added currentIndex as a dependency

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full py-16 bg-black text-white">
      <div className="container mx-auto text-center max-w-4xl px-6">
        <span className="uppercase text-sm tracking-wide mb-2 block">
          — TESTIMONIALS —
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          What Clients Say
        </h2>

        {/* Reviews */}
        <div className="relative h-48 md:h-56">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg italic leading-relaxed max-w-3xl">
                &quotM;{review.text}&quotM;
              </p>
              <div className="mt-6">
                <div className="uppercase font-semibold">{review.author}</div>
                <div className="text-sm text-gray-400">{review.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="mt-6 flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to review ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
