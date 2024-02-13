import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="services" />
      </section>
      <section className="h-auto md:h-screen">
        <Skills />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;