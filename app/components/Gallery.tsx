import Image from "next/image";

const images = [
  "/images/tartalete-cafe-paris-mykolaiv..jpg",
  "/images/appetizers-cafe-paris-mykolaiv..jpg",
  "/images/black-caviar-cafe-paris-mykolaiv.jpg",
  "/images/pork-main.jpg",
  "/images/potato-in-cheese-cafe-paris-mykolaiv..jpg",
  "/images/ribs-cafe-paris-mykolaiv..jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-11.jpg",
  "/images/gallery-12.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-1.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-7.jpg",
];

export default function Gallery() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Фотогалерея
      </h2>

      {/* Scrollable on mobile, grid on md+ */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth">
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-0 snap-start shrink-0 md:shrink shadow-lg rounded overflow-hidden aspect-square relative"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
