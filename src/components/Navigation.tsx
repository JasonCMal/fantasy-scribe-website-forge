
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-amber-400">
            Your Author Name
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("books")}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Books
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-amber-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-b-lg">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("books")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                Books
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
