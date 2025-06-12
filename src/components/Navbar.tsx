import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-6 md:px-18 py-4 flex items-center justify-between rounded-xl transition-all duration-300 ${
        scrolled
          ? "bg-[#221D11]/80 backdrop-blur-md border-b border-[#F4C753] shadow-md"
          : "bg-[#221D11]"
      }`}
    >
      {/* Logo */}
      <a href="#">
        <h1 className="font-bold text-2xl text-[#F4C753]">
          Utsav <span className="text-white">G.</span>
        </h1>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-md">
        <a href="#about" className="hover:text-[#F4C753] duration-300 text-white">About Me</a>
        <a href="#skills" className="hover:text-[#F4C753] duration-300 text-white">Skills</a>
        <a href="#contact" className="hover:text-[#F4C753] duration-300 text-white">Contact</a>
        <Button className="bg-[#F4C753] text-black font-semibold hover:bg-[#e9b939]">
          <a href="#projects">View Projects</a>
        </Button>
        <div className="flex items-center gap-5 ml-4">
          <div className="rounded bg-[#483E23] p-2">
            <a href="https://github.com/utsavg05" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-white hover:text-[#F4C753]" />
            </a>
          </div>
          <div className="rounded bg-[#483E23] p-2">
            <a href="https://www.linkedin.com/in/utsav-gupta-3443a0324" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-white hover:text-[#F4C753]" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#F4C753] mr-3 focus:outline-none">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-7 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="absolute  top-[100%] left-0 w-full bg-[#221D11]/80 backdrop-blur-md border-t border-[#F4C753] shadow-lg flex flex-col items-center gap-6 py-6 md:hidden z-40">
          <a href="#about" className="text-white hover:text-[#F4C753]" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#skills" className="text-white hover:text-[#F4C753]" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className="text-white hover:text-[#F4C753]" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#projects" className="bg-[#F4C753] text-black font-semibold px-4 py-2 rounded hover:bg-[#e9b939]" onClick={() => setMenuOpen(false)}>View Projects</a>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/utsavg05" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-white hover:text-[#F4C753]" />
            </a>
            <a href="https://www.linkedin.com/in/utsav-gupta-3443a0324" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-white hover:text-[#F4C753]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

