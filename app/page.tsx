import Header from "./components/Header";
import Hero from "./components/Hero";
import FoodMenu from "./components/Menu";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="min-h-screen flex justify-center items-center bg-white">
        <h1>Welcome to Caverta</h1>
        <p>Experience fine dining with a seasonal menu.</p>
      </section>

      <section className="min-h-[50vh] flex justify-center items-center bg-transparent">
        <h2>This is a transparent section</h2>
      </section>

      <section className="min-h-screen flex justify-center items-center bg-white">
        <h2>About Us</h2>
        <p>
          We are passionate about creating unforgettable dining experiences.
        </p>
      </section>
      <section className="min-h-[50vh] flex justify-center items-center bg-transparent">
        <h2>This is a transparent section</h2>
      </section>
      <section className="min-h-screen flex justify-center items-center bg-white">
        <FoodMenu menuItems={[]} />
      </section>
    </main>
  );
}
