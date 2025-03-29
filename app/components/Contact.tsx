import React from "react";

export default function Contact() {
  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <div className="text-cyan-700 uppercase tracking-widest mb-2 text-sm">
            — Contact —
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Book a table or event
          </h2>
        </div>

        {/* Left-Aligned Content */}
        <div className="space-y-10 text-left">
          {/* Description */}
          <p className="text-lg text-gray-700">
            Our restaurant space is located right in the heart of the city. Ius
            in paulo referrentur. Per te nibh iriure.
          </p>

          {/* Location */}
          <div>
            <span className="text-sm text-cyan-700 uppercase tracking-widest mb-2">
              — Location —
            </span>
            <p className="text-gray-800 leading-relaxed">
              Миколаїв, Корабельний район,
              <br />
              вул. Олега Кравця 170а (У парку за супермаркетом АТБ)
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="text-sm text-cyan-700 uppercase tracking-widest mb-2">
              — Contact —
            </span>
            <p className="text-gray-800 leading-relaxed">
              (066) 203 21 98
              <br />
              (093) 231 25 09
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <span className="text-sm text-cyan-700 uppercase tracking-widest mb-2">
              — Opening Hours —
            </span>
            <p className="text-gray-800 leading-relaxed">
              Monday – Sunday
              <br />
              10:00 – 23:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
