import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  Layout,
  Users
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MethodologySection } from "@/components/methodology-section";
import { FoundersNote } from "@/components/founders-note";
import { MaturityCheck } from "@/components/maturity-check";
import { StatsTicker } from "@/components/stats-ticker";
import { MagneticCursor } from "@/components/magnetic-cursor";
import strategyImg from "@assets/generated_images/abstract_architectural_structure_representing_stability.png";
import chessImg from "@assets/generated_images/minimalist_abstract_chess_strategy_dark_teal.png";
import structureImg from "@assets/generated_images/geometric_architectural_detail_showing_structure.png";
import maturityImg from "@assets/generated_images/abstract_digital_maturity_growth_chart.png";
import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -20]);

  // Dynamic Headline
  const words = ["Bestuurlijk Inzicht.", "Strategische Rust.", "Schaalbare Groei."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Initialize Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Headline Interval
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
        clearInterval(interval);
        lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary font-sans overflow-x-hidden cursor-none-md">
      <MagneticCursor />
      <Navbar />

      {/* Editorial Hero Grid */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-24 px-6 md:px-12 container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Value Prop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border-l-2 border-primary bg-primary/5 mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Strategic Data Leadership
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8 text-foreground text-balance min-h-[3.3em]">
              Van Data Chaos naar <br/>
              <AnimatePresence mode="wait">
                <motion.span 
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="italic text-primary border-b-4 border-secondary/20 inline-block pb-2"
                >
                    {words[index]}
                </motion.span>
              </AnimatePresence>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-light border-l-4 border-border pl-6 mt-4">
              Wij brengen mandaat, eigenaarschap en prioriteit terug in uw BI—zodat cijfers weer besluitvorming dragen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-sm text-base shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 cursor-hover"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Plan Strategische Sessie
              </Button>
            </div>
          </motion.div>

          {/* Right: Editorial Tile Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative">
             {/* Feature Tile - Large */}
             <motion.div 
                style={{ y: y1 }}
                className="md:col-span-2 group relative aspect-[2/1] overflow-hidden rounded-sm cursor-pointer shadow-xl cursor-hover"
             >
                <img src={chessImg} alt="Strategic Leadership" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Core Service</span>
                            <h3 className="text-3xl font-serif text-white mb-2">Fractional BI Leadership</h3>
                            <p className="text-white/80 max-w-md hidden md:block">Leiderschap op afroep. Uw strategisch partner voor 1-2 dagen per week.</p>
                        </div>
                        <ArrowRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                </div>
             </motion.div>

             {/* Secondary Tile - Vertical */}
             <motion.div 
                style={{ y: y2 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer shadow-lg cursor-hover"
             >
                <img src={structureImg} alt="Governance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 block">Foundation</span>
                    <h3 className="text-2xl font-serif text-white mb-2">Governance & Design</h3>
                    <ChevronRight className="text-white w-5 h-5 absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </motion.div>

             {/* Tertiary Tile - Vertical */}
             <motion.div 
                style={{ y: y2 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer shadow-lg cursor-hover"
             >
                <img src={maturityImg} alt="Maturity Scan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 block">Analysis</span>
                    <h3 className="text-2xl font-serif text-white mb-2">Maturity Scan</h3>
                    <ChevronRight className="text-white w-5 h-5 absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <MethodologySection />

      <section id="expertise" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl font-serif mb-6 text-foreground">Onze Expertise</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Geen standaard pakketten, maar maatwerk leiderschap. Wij vullen het gat tussen operationele BI en strategische besluitvorming.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                title: "Fractional Head of BI",
                desc: "Uw strategisch leider op afroep. Voor 1-2 dagen per week nemen wij de verantwoordelijkheid voor uw BI-roadmap.",
                icon: <Users className="w-5 h-5" />
              },
              {
                title: "Maturity & Strategy Scan",
                desc: "Een scherpe analyse van uw huidige data-volwassenheid. Wij identificeren de kloof tussen ambitie en realiteit.",
                icon: <TrendingUp className="w-5 h-5" />
              },
              {
                title: "Governance & Team Design",
                desc: "Het fundament onder uw data. Wij zetten de standaarden en rollen neer voor betrouwbare inzichten.",
                icon: <Layout className="w-5 h-5" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border border-border p-8 hover:border-primary/50 hover:bg-secondary/5 transition-colors cursor-pointer rounded-sm cursor-hover"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                         {item.icon}
                      </div>
                      <h3 className="text-2xl font-serif font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                   </div>
                   <p className="text-muted-foreground max-w-xl">{item.desc}</p>
                   <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Note */}
      <FoundersNote />

      {/* Contact CTA */}
      <section id="contact" className="py-32 bg-primary/5 relative overflow-hidden">
        
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Klaar voor de volgende stap?</h2>
              <p className="text-muted-foreground text-lg">
                Plan een vrijblijvend strategisch gesprek om uw uitdagingen te bespreken.
              </p>
            </div>

            <div className="bg-background shadow-2xl p-8 md:p-12 border border-border">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Naam</label>
                      <input type="text" className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-primary outline-none transition-colors" placeholder="Uw naam" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Bedrijf</label>
                      <input type="text" className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-primary outline-none transition-colors" placeholder="Uw organisatie" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-primary outline-none transition-colors" placeholder="naam@bedrijf.nl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Bericht</label>
                    <textarea className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="Waar loopt u tegenaan?" />
                  </div>
                  
                  <div className="flex justify-center pt-8">
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 min-w-[240px] h-16 text-lg rounded-sm font-serif cursor-hover">
                      Verstuur Aanvraag
                    </Button>
                  </div>
                </form>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
