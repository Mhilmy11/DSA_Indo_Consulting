import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServicesSection from "./components/OurServicesSection";
import OurTeamsSection from "./components/OurTeamsSection";
import OurClient from "./components/OurClient.jsx";
import GetInTouch from "./components/GetInTouch";

function App() {
  const teamsRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" min-h-screen">
      <Navbar
        onViewTeams={() => scrollToSection(teamsRef)}
        onViewServices={() => scrollToSection(servicesRef)}
        onViewContact={() => scrollToSection(contactRef)}
      />

      <div>
        <button
          onClick={() => window.open("https://wa.me/6281385269507", "_blank")}
          className=" cursor-pointer fixed bottom-6 right-5 md:bottom-10 md:right-10 z-50 bg-green-400 text-white p-2 rounded-full hover:opacity-90 transition-all duration-300"
        >
          <FaWhatsapp size={35} />
        </button>
      </div>

      <Hero
        onViewAbout={() => scrollToSection(aboutRef)}
        onViewContact={() => scrollToSection(contactRef)}
      />

      <AboutSection
        aboutRef={aboutRef}
        onViewServices={() => scrollToSection(servicesRef)}
      />

      <OurTeamsSection teamsRef={teamsRef} />

      <OurServicesSection servicesRef={servicesRef} />

      <OurClient />

      <GetInTouch contactRef={contactRef} />

      <Footer
        onViewTeams={() => scrollToSection(teamsRef)}
        onViewServices={() => scrollToSection(servicesRef)}
      />
    </div>
  );
}

export default App;
