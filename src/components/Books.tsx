
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

export const Books = () => {
  const books = [
    {
      title: "The Dragon's Crown",
      series: "Chronicles of Valeria - Book 1",
      description: "A young knight must claim an ancient crown to save her kingdom from an awakening evil.",
      price: "$12.99",
      rating: 4.8,
      reviews: 234
    },
    {
      title: "Shadows of the Realm",
      series: "Chronicles of Valeria - Book 2", 
      description: "The kingdom falls under siege as dark forces gather strength in the northern wastes.",
      price: "$12.99",
      rating: 4.9,
      reviews: 189
    },
    {
      title: "The Last Phoenix",
      series: "Standalone Novel",
      description: "In a world where magic is dying, one mage holds the key to its restoration.",
      price: "$14.99",
      rating: 4.7,
      reviews: 312
    }
  ];

  return (
    <section id="books" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            My Books
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Embark on epic journeys through realms of magic, adventure, and heroism
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105 group">
              <CardContent className="p-6">
                {/* Book cover placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mb-4 border border-amber-500/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300">
                  <div className="text-slate-400 text-center">
                    <div className="text-6xl mb-2">📖</div>
                    <p className="text-sm">Book Cover</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-1">{book.title}</h3>
                    <p className="text-sm text-amber-300/80">{book.series}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {book.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(book.rating) ? "text-amber-400 fill-current" : "text-slate-600"}
                        />
                      ))}
                    </div>
                    <span className="text-slate-300 text-sm">
                      {book.rating} ({book.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-2xl font-bold text-amber-400">{book.price}</span>
                    <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold">
                      Buy Now
                      <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-300 mb-6">
            Looking for more? Check out my complete collection on major book retailers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
              Amazon
            </Button>
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
              Barnes & Noble
            </Button>
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
              Goodreads
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
