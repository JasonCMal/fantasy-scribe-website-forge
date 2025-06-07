
import { Card } from "@/components/ui/card";
import { Feather, BookOpen, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            About the Author
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-2xl border border-amber-500/20 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <Feather size={64} className="mx-auto mb-4" />
                <p>Your Author Photo</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20"></div>
          </div>

          {/* Author description */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Welcome to my realm of fantasy and adventure. I'm a passionate storyteller who believes in the power of heroic tales to inspire, entertain, and transport readers to worlds beyond imagination.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey as a writer began with a love for classic fantasy literature and has evolved into crafting epic tales of heroes, magic, and the eternal struggle between good and evil. Each story I write aims to capture the wonder and excitement that first drew me to the fantasy genre.
            </p>

            {/* Stats/Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-slate-800/50 border-amber-500/20 p-4 text-center">
                <BookOpen className="text-amber-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-amber-400">5+</div>
                <div className="text-slate-300 text-sm">Published Books</div>
              </Card>
              <Card className="bg-slate-800/50 border-amber-500/20 p-4 text-center">
                <Award className="text-amber-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-amber-400">10K+</div>
                <div className="text-slate-300 text-sm">Happy Readers</div>
              </Card>
              <Card className="bg-slate-800/50 border-amber-500/20 p-4 text-center">
                <Feather className="text-amber-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-amber-400">3</div>
                <div className="text-slate-300 text-sm">Series</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
