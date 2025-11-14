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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" min-h-screen bg-gradient-to-br from-secondary via-[#052E70] to-primary">
      <Navbar
        onViewTeams={() => scrollToSection(teamsRef)}
        onViewServices={() => scrollToSection(servicesRef)}
      />

      <Hero onViewAbout={() => scrollToSection(aboutRef)} />

      <AboutSection
        aboutRef={aboutRef}
        onViewServices={() => scrollToSection(servicesRef)}
      />

      <OurTeamsSection teamsRef={teamsRef} />

      <OurServicesSection servicesRef={servicesRef} />

      <GetInTouch />

      <Footer
        onViewTeams={() => scrollToSection(teamsRef)}
        onViewServices={() => scrollToSection(servicesRef)}
      />
    </div>
  );
}

export default App;
