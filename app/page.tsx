import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portafolio from "./components/Portafolio/Portafolio";
import Contacto from "./components/Contacto/Contacto";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Portafolio />
      <Contacto />
    </div>
  );
}
