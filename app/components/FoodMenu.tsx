"use client";

import { useEffect, useState } from "react";
import MenuSkeleton from "./MenuSkeleton";
import { FoodMenuType } from "./interfaces/food-menu.type";

interface FoodMenuItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

interface FoodMenuProps {
  menuType: FoodMenuType;
}

const menuSheetMap: Record<string, { tab: string; range: string }> = {
  main: { tab: "main menu", range: "A:D" },
  banquet: { tab: "banquet menu", range: "A:D" },
  drinks: { tab: "drinks menu", range: "A:F" },
};

export default function FoodMenu({ menuType }: FoodMenuProps) {
  const [menuItems, setMenuItems] = useState<FoodMenuItemProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Закуски");
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const SHEET_ID =
      process.env.GOOGLE_SHEET_ID ||
      "1sHgLsCjBU4ooSqXTf0qjJ3djGt1wZcdxOu9864mOPMs";
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

    const sheetInfo = menuSheetMap[menuType];
    if (!sheetInfo) return;
    setLoading(true);
    const { tab, range } = sheetInfo;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
      `${tab}!${range}`
    )}?key=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.values) {
          const formattedData = data.values
            .slice(1)
            .map((row: string[], index: number) => {
              const [name, price, description, category] = row;
              return {
                id: index + 1,
                name: name || "",
                price: parseFloat(price) || 0,
                description: description || "",
                category: category || "Other",
              };
            });
          setMenuItems(formattedData);
        }
      })
      .catch((error) => console.error("Error fetching menu data:", error))
      .finally(() => setLoading(false));
  }, [menuType]);

  const categories = [
    "Закуски",
    "Супи",
    "Салати",
    "Курка",
    "Свинина",
    "Гарніри",
    "Десерти",
  ];

  const handleCategoryChange = (category: string) => {
    setIsFadingOut(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsFadingOut(false);
    }, 300);
  };

  return loading ? (
    <MenuSkeleton />
  ) : (
    <section
      id="menu-section"
      className="container mx-auto px-4 lg:px-16 py-12"
    >
      <div className="text-center mb-8 px-4">
        <div className="text-cyan-700 uppercase tracking-widest mb-2 text-sm">
          — Discover —
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          {menuType === "main"
            ? "Menu à la Carte"
            : menuType === "banquet"
            ? "Banquet Menu"
            : "Drinks Menu"}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
          Explore texture, color, and of course the ultimate tastes with our
          seasonal menu.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm md:text-base uppercase border border-gray-400 rounded-lg transition-all ${
              selectedCategory === category
                ? "bg-cyan-700 text-white"
                : "text-gray-800 hover:bg-gray-100"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {menuItems
          .filter((item) => item.category === selectedCategory)
          .map((item) => (
            <article
              key={item.id}
              className="text-base pb-6 border-b border-dotted border-gray-400 flex justify-between items-start w-full"
            >
              <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm italic text-gray-500">
                  {item.description}
                </p>
              </div>
              <span className="text-lg font-bold">{item.price} грн</span>
            </article>
          ))}
      </div>
    </section>
  );
}
