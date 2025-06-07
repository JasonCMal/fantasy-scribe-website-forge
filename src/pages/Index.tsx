import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Books } from "@/components/Books";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-deep-forest to-slate-950 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Otherworld mist layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-otherworld-mist/10 via-transparent to-deep-forest/20"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-ancient-gold/5 via-transparent to-transparent"></div>
        
        {/* Ethereal orbs representing the Otherworld */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-ancient-gold/20 to-dawn-amber/10 ethereal-drift"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        
        {/* Runic symbols scattered across the background */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`rune-${i}`}
            className="absolute text-ancient-gold/10 text-4xl font-runes runic-pulse select-none"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            ᚱᚢᚾᛖ
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Books />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
