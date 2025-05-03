import React from "react";

export default function Contact() {
  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <div className="text-cyan-700 uppercase tracking-widest mb-2 text-sm">
            — Контакти —
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Бронювання столиків чи банкетів
          </h2>
        </div>

        {/* Left-Aligned Content */}
        <div className="space-y-10 text-left">
          {/* Description */}
          <p className="text-lg text-gray-700">
            Для бронювання столиків та банкетів телефонуйте за номерами: (066)
            203 21 98, (093) 231 25 09
          </p>

          <div>
            <span className="text-sm text-cyan-700 uppercase tracking-widest mb-2">
              — Адреса —
            </span>
            <p className="text-gray-800 leading-relaxed">
              Миколаїв, Корабельний район,
              <br />
              вул. Олега Кравця 170а (У парку за супермаркетом АТБ)
            </p>
          </div>

          <div>
            <span className="text-sm text-cyan-700 uppercase tracking-widest mb-2">
              — Контакти —
            </span>
            <p className="text-gray-800 leading-relaxed">
              (066) 203 21 98
              <br />
              (093) 231 25 09
            </p>
          </div>

          <div>
            <span className="text-sm text-cyan-700 uppercase tracking-widest mb-2">
              — Часи роботи —
            </span>
            <p className="text-gray-800 leading-relaxed">
              Понеділок - Неділя
              <br />
              10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
