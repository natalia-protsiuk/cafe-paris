import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { DateTime } from "luxon";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-white text-lg font-semibold">Café Paris</h2>
            <p className="italic text-gray-300">Гурманська кухня</p>
            <p className="mt-4">
              Для створення незабутнього свята рекомендуємо заздалегідь
              бронювати столики для банкетів та весіль. Завітайте до нас, щоб
              насолодитися вишуканими стравами та винами, які зроблять ваш захід
              особливим.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-semibold uppercase mb-3">Адреса</h3>
            <p></p>
            <p>
              м. Миколаїв, Корабельний район, вул.Олега Кравця 170a (У парку за
              супермаркетом АТБ)
            </p>
            <p className="mt-2">T: (066) 203 21 98, (093) 231 25 09</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold uppercase mb-3">Hours</h3>
            <p>Понеділок – Вівторок</p>
            <p>10:00 - 23:00</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs">
            Copyright © 2001 - {DateTime.now().year}, Café Paris.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/CafeParisNikolaev"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/cafe_paris_niko"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
