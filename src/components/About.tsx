
import { Card } from "@/components/ui/card";
import { Feather, BookOpen, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Ancient parchment texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="font-runes text-ancient-gold/60 text-lg mb-4 tracking-widest">
            ᚦᛖ ᚲᚺᚱᛟᚾᛁᚲᛚᛖᚱ
          </div>
          <h2 className="font-fantasy text-4xl md:text-5xl font-bold text-ancient-gold mb-6">
            The Chronicler's Tale
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ancient-gold to-transparent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author image with mystical frame */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-slate-800 via-slate-900 to-deep-forest rounded-lg shadow-2xl border-2 border-ancient-gold/30 flex items-center justify-center relative overflow-hidden">
              {/* Mystical corner decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-ancient-gold/50"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-ancient-gold/50"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-ancient-gold/50"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-ancient-gold/50"></div>
              
              <div className="text-center text-rune-silver z-10">
                <Feather size={64} className="mx-auto mb-4 text-ancient-gold" />
                <p className="font-fantasy">Your Portrait Here</p>
              </div>
              
              {/* Ethereal glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-ancient-gold/5 via-transparent to-dawn-amber/5"></div>
            </div>
            
            {/* Floating mystical orbs around the image */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-ancient-gold/30 to-dawn-amber/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-otherworld-mist/40 to-rune-silver/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Author description with mystical styling */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-ancient-gold via-dawn-amber to-transparent rounded-full"></div>
              <p className="text-lg text-rune-silver leading-relaxed pl-8">
                [Your personal story and journey as a writer - what drew you to create the world of the Godspeaker, your inspiration from Anglo-Saxon culture and mythology]
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-dawn-amber via-ancient-gold to-transparent rounded-full"></div>
              <p className="text-lg text-rune-silver leading-relaxed pl-8">
                [Your writing philosophy, what themes drive your storytelling, and what you hope readers take away from the Chronicles]
              </p>
            </div>

            {/* Mystical stats/achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-slate-900/60 border-2 border-ancient-gold/20 p-4 text-center backdrop-blur-sm hover:border-ancient-gold/40 transition-all duration-300">
                <div className="relative">
                  <BookOpen className="text-ancient-gold mx-auto mb-2" size={32} />
                  <div className="absolute inset-0 animate-pulse">
                    <BookOpen className="text-dawn-amber/30 mx-auto mb-2" size={32} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-ancient-gold font-fantasy">X</div>
                <div className="text-rune-silver text-sm">Published Chronicles</div>
              </Card>
              
              <Card className="bg-slate-900/60 border-2 border-ancient-gold/20 p-4 text-center backdrop-blur-sm hover:border-ancient-gold/40 transition-all duration-300">
                <div className="relative">
                  <Award className="text-ancient-gold mx-auto mb-2" size={32} />
                  <div className="absolute inset-0 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Award className="text-dawn-amber/30 mx-auto mb-2" size={32} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-ancient-gold font-fantasy">X</div>
                <div className="text-rune-silver text-sm">Devoted Readers</div>
              </Card>
              
              <Card className="bg-slate-900/60 border-2 border-ancient-gold/20 p-4 text-center backdrop-blur-sm hover:border-ancient-gold/40 transition-all duration-300">
                <div className="relative">
                  <Feather className="text-ancient-gold mx-auto mb-2" size={32} />
                  <div className="absolute inset-0 animate-pulse" style={{ animationDelay: '1s' }}>
                    <Feather className="text-dawn-amber/30 mx-auto mb-2" size={32} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-ancient-gold font-fantasy">X</div>
                <div className="text-rune-silver text-sm">Years of Chronicling</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
