import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
export default function Home() {
  return (
    <main>
      <Hero
      title="GEMS"
      tagline="Ditch the ordinary and level up your smile. "/>
      
      <CardGrid items={items} />
    </main>
  );
}
