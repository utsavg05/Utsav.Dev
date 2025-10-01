import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
