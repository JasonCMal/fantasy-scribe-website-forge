
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
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-ancient-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="font-runes text-ancient-gold text-sm">ᚷᛟᛞᛋᛈᛖᚨᚴᛖᚱ</div>
            <div className="text-xl font-bold text-ancient-gold font-fantasy">
              [Your Author Name]
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-rune-silver hover:text-ancient-gold transition-colors font-fantasy relative group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-ancient-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-rune-silver hover:text-ancient-gold transition-colors font-fantasy relative group"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-ancient-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection("books")}
              className="text-rune-silver hover:text-ancient-gold transition-colors font-fantasy relative group"
            >
              Chronicles
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-ancient-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-rune-silver hover:text-ancient-gold transition-colors font-fantasy relative group"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-ancient-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-rune-silver hover:text-ancient-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 rounded-b-lg border border-ancient-gold/20 backdrop-blur-sm">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-rune-silver hover:text-ancient-gold transition-colors font-fantasy"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-rune-silver hover:text-ancient-gold transition-colors font-fantasy"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("books")}
                className="block w-full text-left px-3 py-2 text-rune-silver hover:text-ancient-gold transition-colors font-fantasy"
              >
                Chronicles
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-rune-silver hover:text-ancient-gold transition-colors font-fantasy"
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
