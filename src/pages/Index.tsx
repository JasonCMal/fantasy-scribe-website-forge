
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Books } from "@/components/Books";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <Hero />
      <About />
      <Books />
      <Contact />
    </div>
  );
};

export default Index;
