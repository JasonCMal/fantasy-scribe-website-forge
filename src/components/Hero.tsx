
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToBooks = () => {
    const element = document.getElementById("books");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ancient mystical overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ancient-gold/5 via-transparent to-otherworld-mist/10"></div>
      
      {/* Floating mystical elements representing the Gift/foresight */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-ancient-gold/40 rounded-full shadow-lg shadow-ancient-gold/20"></div>
          </div>
        ))}
      </div>

      {/* Central mystical circle representing the cyclical nature of time */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 border border-ancient-gold/20 rounded-full animate-spin" style={{ animationDuration: '60s' }}>
          <div className="w-full h-full border border-dawn-amber/10 rounded-full animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
            <div className="w-full h-full border border-rune-silver/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="font-runes text-ancient-gold/60 text-xl mb-4 tracking-widest">
            ᚦᛖ ᚷᛟᛞᛋᛈᛖᚨᚴᛖᚱ ᚨᚹᚨᛁᛏᛋ
          </div>
          <h1 className="font-fantasy text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="otherworld-shimmer">
              Chronicles of the
              <br />
              Godspeaker
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-rune-silver mb-8 max-w-4xl mx-auto leading-relaxed">
          In a world where the ancient gods still walk among mortals, and the Otherworld bleeds into our realm, 
          witness the rise of one blessed with the Gift—a Godspeaker destined to stand against the coming darkness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToBooks}
            className="bg-gradient-to-r from-ancient-gold to-dawn-amber hover:from-dawn-amber hover:to-ancient-gold text-deep-forest font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-ancient-gold/20"
          >
            Enter the Chronicles
          </Button>
          <Button 
            onClick={scrollToAbout}
            variant="outline" 
            className="border-2 border-ancient-gold text-ancient-gold hover:bg-ancient-gold hover:text-deep-forest px-8 py-3 text-lg transition-all duration-300 backdrop-blur-sm bg-slate-950/20"
          >
            Meet the Chronicler
          </Button>
        </div>
      </div>

      {/* Scroll indicator with mystical styling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <ChevronDown className="text-ancient-gold w-8 h-8 drop-shadow-lg" />
          <div className="absolute inset-0 animate-pulse">
            <ChevronDown className="text-dawn-amber/50 w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
