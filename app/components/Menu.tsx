"use client";
import React, { useState, memo } from "react";

interface FoodMenuItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "Starters" | "Main Course" | "Soups" | "Desserts";
}

interface FoodMenuProps {
  menuItems: FoodMenuItemProps[];
}

const menuItems: FoodMenuItemProps[] = [
  {
    id: 1,
    name: "Tomato Bruschetta",
    price: 4.0,
    description: "Tomatoes, Olive Oil, Cheese",
    category: "Starters",
  },
  {
    id: 2,
    name: "Pasta Carbonara",
    price: 8.5,
    description: "Pasta, Egg, Pancetta, Parmesan",
    category: "Main Course",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: 7.0,
    description: "Tomato, Mozzarella, Basil",
    category: "Main Course",
  },
  {
    id: 4,
    name: "Caesar Salad",
    price: 5.5,
    description: "Romaine, Croutons, Parmesan, Caesar Dressing",
    category: "Starters",
  },
  {
    id: 5,
    name: "Minestrone Soup",
    price: 6.0,
    description: "Vegetables, Beans, Pasta",
    category: "Soups",
  },
  {
    id: 6,
    name: "Tiramisu",
    price: 4.5,
    description: "Mascarpone, Coffee, Cocoa",
    category: "Desserts",
  },
  // Add more items as needed
];

const FoodMenuTitle = memo(() => (
  <div className="text-center mb-8">
    <div className="smalltitle text-cyan-700 mb-4">Discover</div>
    <h2 className="text-5xl mb-12">Menu a la Carte</h2>
    <div className="w-1/2 mx-auto">
      Explore texture, color and of course the ultimate tastes with our menu of
      the season. All the ingredients are fresh and carefully selected by our
      chefs. Enjoy an extraordinary dining experience.
    </div>
  </div>
));

const FoodMenuItem: React.FC<{ item: FoodMenuItemProps }> = ({ item }) => (
  <article
    className="text-base mb-6 pb-6 border-b border-dotted border-gray-400"
    aria-labelledby={`menu-item-${item.id}`}
  >
    <h4 className="relative text-[21px]" id={`menu-item-${item.id}`}>
      <span>{item.name}</span>
      <span className="absolute top-0 right-0">${item.price.toFixed(2)}</span>
    </h4>
    <p className="text-sm italic text-gray-500">
      {item.description || "No description available."}
    </p>
  </article>
);

const categories = ["Starters", "Main Course", "Soups", "Desserts"];

const FoodMenu: React.FC<FoodMenuProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Starters");

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="container mx-auto">
      <FoodMenuTitle />
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 uppercase ${
              selectedCategory === category ? "text-cyan-700" : "text-gray-800"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-[54px]">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodMenuItem key={item.id} item={item} />
          ))
        ) : (
          <p>No items available for {selectedCategory}</p>
        )}
      </div>
    </section>
  );
};

export default FoodMenu;
