
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Books = () => {
  // Placeholder data - you can replace with your actual book information
  const books = [
    {
      title: "[Your Book Title]",
      series: "The Godspeaker Chronicles - Book 1",
      description: "[Your book description - the beginning of the Godspeaker's journey, his first encounter with the Gift, the oaths sworn and broken...]",
      price: "$X.XX",
      themes: ["Divine Bloodlines", "Ancient Oaths", "The Gift Awakens"]
    },
    {
      title: "[Your Book Title]",
      series: "The Godspeaker Chronicles - Book 2", 
      description: "[Your book description - the world grows darker, allies are tested, the Otherworld intrudes more frequently...]",
      price: "$X.XX",
      themes: ["Loyalty Tested", "Growing Darkness", "Love & Loss"]
    },
    {
      title: "[Your Book Title]",
      series: "The Godspeaker Chronicles - Book 3",
      description: "[Your book description - the cycle nears its end, final battles loom, but hope remains for the dawn...]",
      price: "$X.XX",
      themes: ["Cyclical Time", "Blood & Honor", "Dawn's Promise"]
    }
  ];

  return (
    <section id="books" className="py-20 px-4 bg-gradient-to-b from-slate-900/40 via-deep-forest/20 to-slate-900/40 relative">
      {/* Mystical background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-ancient-gold/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-dawn-amber/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="font-runes text-ancient-gold/60 text-lg mb-4 tracking-widest">
            ᚦᛖ ᚲᚺᚱᛟᚾᛁᚲᛚᛖᛋ
          </div>
          <h2 className="font-fantasy text-4xl md:text-5xl font-bold text-ancient-gold mb-6">
            The Chronicles Unfold
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ancient-gold to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-rune-silver max-w-4xl mx-auto">
            [Your series description - the overarching tale of the Godspeaker, the world's descent into darkness, and the hope that remains]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="bg-slate-900/70 border-2 border-ancient-gold/20 hover:border-ancient-gold/50 transition-all duration-500 hover:transform hover:scale-105 group backdrop-blur-sm relative overflow-hidden">
              {/* Mystical corner ornaments */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-ancient-gold/40 transition-all duration-300 group-hover:border-ancient-gold/80"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-ancient-gold/40 transition-all duration-300 group-hover:border-ancient-gold/80"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-ancient-gold/40 transition-all duration-300 group-hover:border-ancient-gold/80"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-ancient-gold/40 transition-all duration-300 group-hover:border-ancient-gold/80"></div>
              
              <CardContent className="p-6 relative z-10">
                {/* Book cover placeholder with mystical styling */}
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 via-deep-forest to-slate-950 rounded-lg mb-4 border-2 border-ancient-gold/30 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-ancient-gold/20 transition-all duration-500 relative overflow-hidden">
                  {/* Mystical glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ancient-gold/10 via-transparent to-dawn-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="text-rune-silver text-center relative z-10">
                    <div className="text-5xl mb-2 text-ancient-gold">📖</div>
                    <div className="font-runes text-xs text-ancient-gold/60">ᛒᛟᛟᚴ</div>
                    <p className="text-xs mt-2">Your Cover Art</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-fantasy text-xl font-bold text-ancient-gold mb-1 group-hover:text-dawn-amber transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-sm text-rune-silver/80 font-fantasy">{book.series}</p>
                  </div>

                  <p className="text-rune-silver text-sm leading-relaxed">
                    {book.description}
                  </p>

                  {/* Theme tags */}
                  <div className="flex flex-wrap gap-2">
                    {book.themes.map((theme, themeIndex) => (
                      <span 
                        key={themeIndex}
                        className="text-xs px-2 py-1 bg-ancient-gold/20 text-ancient-gold border border-ancient-gold/30 rounded-md font-fantasy"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-ancient-gold/20">
                    <span className="text-2xl font-bold text-ancient-gold font-fantasy">{book.price}</span>
                    <Button className="bg-gradient-to-r from-ancient-gold to-dawn-amber hover:from-dawn-amber hover:to-ancient-gold text-deep-forest font-semibold transition-all duration-300 shadow-lg shadow-ancient-gold/20">
                      Acquire Chronicle
                      <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-rune-silver mb-6 font-fantasy">
            [Your call to action - where readers can find more of your work, join your community, etc.]
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-2 border-ancient-gold text-ancient-gold hover:bg-ancient-gold hover:text-deep-forest font-fantasy backdrop-blur-sm bg-slate-950/20">
              Amazon
            </Button>
            <Button variant="outline" className="border-2 border-ancient-gold text-ancient-gold hover:bg-ancient-gold hover:text-deep-forest font-fantasy backdrop-blur-sm bg-slate-950/20">
              Barnes & Noble
            </Button>
            <Button variant="outline" className="border-2 border-ancient-gold text-ancient-gold hover:bg-ancient-gold hover:text-deep-forest font-fantasy backdrop-blur-sm bg-slate-950/20">
              Goodreads
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
