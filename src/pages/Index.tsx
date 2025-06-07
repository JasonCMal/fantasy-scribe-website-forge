
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Books } from "@/components/Books";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Books />
      <Contact />
    </div>
  );
};

export default Index;
