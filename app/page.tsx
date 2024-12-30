import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portafolio from "./components/Portafolio/Portafolio";
import Contacto from "./components/Contacto/Contacto";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
      >
        <path
          fill="#000000"
          d="M0,256C480,370,960,160,1440,256L1440,320L0,320Z"
        ></path>
      </svg>
      <About />
      <Portafolio />
      <Contacto />
    </div >
  );
}
