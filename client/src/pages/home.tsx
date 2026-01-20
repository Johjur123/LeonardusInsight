import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BentoGrid } from "@/components/bento-grid";
import { SocialProof } from "@/components/social-proof";
import { NeedSelector } from "@/components/need-selector";
import { MagneticCursor } from "@/components/magnetic-cursor";
import { useEffect } from "react";
import Lenis from "lenis";
import heroBg from "@assets/generated_images/cinematic_dark_blue_abstract_data_waves.png";

export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
        lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden cursor-none-md">
      <MagneticCursor />
      <Navbar />

      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Living Background */}
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
           <img 
              src={heroBg} 
              alt="Cinematic Background" 
              className="w-full h-full object-cover scale-110"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/20 to-background" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 mt-20">
           <div className="max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                 <div className="h-px w-12 bg-primary" />
                 <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
                    Strategic Data Consultancy
                 </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] tracking-tight mb-12"
              >
                 Winning <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">with Data.</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col md:flex-row gap-8 md:items-center max-w-2xl"
              >
                 <p className="text-lg text-white/60 leading-relaxed font-light">
                    We transform fragmented data landscapes into strategic engines. 
                    Bringing clarity, governance, and leadership to the modern boardroom.
                 </p>
                 <Button 
                    size="lg" 
                    className="bg-white text-background hover:bg-white/90 h-16 px-10 rounded-none text-sm font-mono uppercase tracking-widest flex items-center gap-2 group min-w-[200px]"
                    onClick={() => document.querySelector('#insights')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                    Explore Strategy
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                 </Button>
              </motion.div>
           </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
           <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent relative overflow-hidden">
              <motion.div 
                 className="absolute top-0 left-0 w-full h-1/2 bg-primary"
                 animate={{ y: ["-100%", "200%"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
           </div>
           <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      <SocialProof />

      <NeedSelector />

      <BentoGrid />

      {/* Quote Section (High Contrast) */}
      <section id="impact" className="py-32 bg-primary/10 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
         
         <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight max-w-4xl mx-auto mb-12">
               "Data without governance is a liability. <br/>
               Data with strategy is an <span className="text-primary italic">unfair advantage.</span>"
            </h2>
            <div className="inline-flex flex-col items-center">
               <span className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Our Philosophy</span>
               <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">Initiate Dialogue</span>
                 <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
                    Let's Talk <br/>Strategy.
                 </h2>
                 <p className="text-xl text-white/50 font-light max-w-md mb-12">
                    Schedule a confidential consultation to discuss your organization's data maturity and strategic goals.
                 </p>
                 <div className="flex gap-8 text-white/40 font-mono text-xs uppercase tracking-widest">
                    <span>Amsterdam</span>
                    <span>•</span>
                    <span>Remote Capable</span>
                 </div>
              </div>

              <div className="bg-card border border-white/5 p-8 md:p-12 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label className="font-mono text-xs text-white/40 uppercase tracking-widest">Name</label>
                       <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary outline-none transition-colors" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                       <label className="font-mono text-xs text-white/40 uppercase tracking-widest">Corporate Email</label>
                       <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary outline-none transition-colors" placeholder="name@company.com" />
                    </div>
                    <div className="space-y-2">
                       <label className="font-mono text-xs text-white/40 uppercase tracking-widest">Challenge</label>
                       <textarea className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="Briefly describe your strategic data needs..." />
                    </div>
                    
                    <Button size="lg" className="w-full bg-white text-background hover:bg-white/90 h-14 rounded-none font-mono text-xs uppercase tracking-widest mt-4">
                       Request Consultation
                    </Button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
