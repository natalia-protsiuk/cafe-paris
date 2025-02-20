const tiles = [
  { title: "Головне меню", image: "/menu.jpg", link: "#" },
  { title: "Банкетне меню", image: "/reservation.jpg", link: "#" },
  { title: "Напої", image: "/news.jpg", link: "#" },
];

export default function TilesSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile, index) => (
          <a
            key={index}
            href={tile.link}
            className="relative group w-full h-60 md:h-72 lg:h-80 block"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${tile.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg uppercase tracking-wide">
              — {tile.title} —
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
