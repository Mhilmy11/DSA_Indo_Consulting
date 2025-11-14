import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-secondary via-[#052E70] to-primary">
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
