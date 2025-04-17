"use client";
import { useEffect, useState } from "react";
import MenuSkeleton from "./MenuSkeleton";
import { FoodMenuType } from "./interfaces/food-menu.type";

interface FoodMenuItemProps {
  id: number;
  name: string;
  price: number;
  price50g?: number;
  price100g?: number;
  priceBottle?: number;
  description: string;
  category: string;
}

interface FoodMenuProps {
  menuType: FoodMenuType;
}

const menuSheetMap: Record<
  FoodMenuType,
  {
    tab: string;
    range: string;
    orderKey: string;
    categoryIndex: number;
    descriptionIndex: number;
    priceIndex?: number;
  }
> = {
  main: {
    tab: "main menu",
    range: "A:D",
    orderKey: "mainMenuOrder",
    categoryIndex: 3,
    descriptionIndex: 2,
    priceIndex: 1,
  },
  banquet: {
    tab: "banquet menu",
    range: "A:D",
    orderKey: "banquetMenuOrder",
    categoryIndex: 3,
    descriptionIndex: 2,
    priceIndex: 1,
  },
  drinks: {
    tab: "drinks menu",
    range: "A:F",
    orderKey: "drinksMenuOrder",
    categoryIndex: 5,
    descriptionIndex: 4,
  },
};

export default function FoodMenu({ menuType }: FoodMenuProps) {
  const [menuItems, setMenuItems] = useState<FoodMenuItemProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const SHEET_ID =
      process.env.GOOGLE_SHEET_ID ||
      "1sHgLsCjBU4ooSqXTf0qjJ3djGt1wZcdxOu9864mOPMs";
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

    const fetchMenu = async () => {
      const sheetInfo = menuSheetMap[menuType];
      if (!sheetInfo) return;

      setLoading(true);

      const CONFIG_TAB = "settings";
      const CONFIG_RANGE = "A:B";

      const fetchConfig = async (
        SHEET_ID: string,
        API_KEY: string
      ): Promise<Record<string, string>> => {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
          `${CONFIG_TAB}!${CONFIG_RANGE}`
        )}?key=${API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        const config: Record<string, string> = {};
        if (data.values) {
          for (const [key, value] of data.values) {
            config[key] = value;
          }
        }

        return config;
      };

      try {
        const [menuRes, config] = await Promise.all([
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
              `${sheetInfo.tab}!${sheetInfo.range}`
            )}?key=${API_KEY}`
          ).then((res) => res.json()),
          fetchConfig(SHEET_ID, API_KEY!),
        ]);

        const rows = menuRes.values || [];

        const formattedData: FoodMenuItemProps[] = rows
          .slice(1)
          .map((row: string[], index: number) => {
            const name = row[0] || "";
            const description = row[sheetInfo.descriptionIndex] || "";
            const category = row[sheetInfo.categoryIndex] || "Other";

            if (menuType === "drinks") {
              return {
                id: index + 1,
                name,
                description,
                category,
                price50g: parseFloat(row[1]) || undefined,
                price100g: parseFloat(row[2]) || undefined,
                priceBottle: parseFloat(row[3]) || undefined,
              };
            } else {
              return {
                id: index + 1,
                name,
                description,
                category,
                price: parseFloat(row[sheetInfo.priceIndex ?? 1]) || 0,
              };
            }
          });

        setMenuItems(formattedData);

        const uniqueCategories: string[] = Array.from(
          new Set(formattedData.map((item) => item.category))
        );

        const rawOrder = config[sheetInfo.orderKey] || "";
        const orderList = rawOrder.split(",").map((cat) => cat.trim());

        const orderedCategories = uniqueCategories.sort((a, b) => {
          const indexA = orderList.indexOf(a);
          const indexB = orderList.indexOf(b);
          if (indexA === -1 && indexB === -1) return a.localeCompare(b);
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;
          return indexA - indexB;
        });

        setCategories(orderedCategories);
        setSelectedCategory(orderedCategories[0] || "");
      } catch (error) {
        console.error("Error fetching menu data or config:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [menuType]);

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

      {categories.length > 0 && (
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
      )}

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
              {menuType === "drinks" ? (
                <div className="text-right whitespace-nowrap text-sm font-semibold text-gray-800">
                  {item.price50g && <div>50г: {item.price50g} грн</div>}
                  {item.price100g && <div>100г: {item.price100g} грн</div>}
                  {item.priceBottle && <div>Бут: {item.priceBottle} грн</div>}
                </div>
              ) : (
                <span className="text-lg font-bold">{item.price} грн</span>
              )}
            </article>
          ))}
      </div>
    </section>
  );
}
