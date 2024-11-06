import Header from "./components/Header";
import Hero from "./components/Hero";
import FoodMenu from "./components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FoodMenu menuItems={[]} />
    </>
  );
}
