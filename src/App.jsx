import { useRef } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServicesSection from "./components/OurServicesSection";
import OurTeamsSection from "./components/OurTeamsSection";
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
    <div className=" min-h-screen bg-gradient-to-br from-secondary via-[#052E70] to-primary">
      <Navbar
        onViewTeams={() => scrollToSection(teamsRef)}
        onViewServices={() => scrollToSection(servicesRef)}
        onViewContact={() => scrollToSection(contactRef)}
      />

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

      <GetInTouch contactRef={contactRef} />

      <Footer
        onViewTeams={() => scrollToSection(teamsRef)}
        onViewServices={() => scrollToSection(servicesRef)}
      />
    </div>
  );
}

export default App;
