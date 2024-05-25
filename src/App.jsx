import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project/Project";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";


const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar/>
      <Hero />
    </section>
    {<section id="Skills" >
      <Parallax type="services"/>
    </section>}
    {<section>
      <Services />
    </section>}
    {<section id="Projects">
      <Parallax type="portfolio" />
    </section>}
    {<Project />}
    {<section id="Contact">
      <Contact />
    </section>}
    
  </div>;
};

export default App;
