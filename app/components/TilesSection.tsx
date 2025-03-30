"use client";

import { FoodMenuType } from "./interfaces/food-menu.type";

interface Tile {
  title: string;
  image: string;
  value: string; // 'main' | 'banquet' | 'drinks'
}

const tiles: Tile[] = [
  { title: "Головне меню", image: "/images/main-menu.jpg", value: "main" },
  { title: "Банкетне меню", image: "/images/banquet.jpg", value: "banquet" },
  { title: "Напої", image: "/images/drinks-menu.jpg", value: "drinks" },
];

interface TilesSectionProps {
  onTileClick: (menu: FoodMenuType) => void;
}

export default function TilesSection({ onTileClick }: TilesSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile, index) => (
          <button
            key={index}
            onClick={() => onTileClick(tile.value as FoodMenuType)}
            className="relative group w-full h-60 md:h-72 lg:h-80 block focus:outline-none"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${tile.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg uppercase tracking-wide">
              — {tile.title} —
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
