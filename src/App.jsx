import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-[-12] bg-[#000319] text-white selection:bg-cyan-300 selection:text-cyan-900">
      <div className="px-5 md:px-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

