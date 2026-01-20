import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BentoGrid } from "@/components/bento-grid";
import { SocialProof } from "@/components/social-proof";
import { ForWhoWeWork } from "@/components/for-who-we-work";
import { AboutFractionalBI } from "@/components/about-fractional-bi";
import { WhatWeDo } from "@/components/what-we-do";
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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden md:cursor-none">
      <MagneticCursor />
      <Navbar />

      {/* Cinematic Hero Section */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/80 via-black/70 to-background">
        {/* Living Background */}
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0 mix-blend-screen opacity-70"
        >
           <img 
              src={heroBg} 
              alt="Cinematic Background" 
              className="w-full h-full object-cover scale-110"
              loading="eager"
              decoding="async"
              fetchpriority="high"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/20 to-background" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 mt-20">
           <div className="max-w-5xl md:max-w-6xl flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-2/3 bg-black/60 backdrop-blur-sm border border-white/5 px-6 md:px-8 py-8 md:py-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                   <div className="h-px w-12 bg-primary" />
                   <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase" data-testid="text-hero-kicker">
                      Strategisch BI & Data Regie
                   </span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-6 max-w-3xl"
                  data-testid="text-hero-heading"
                >
                   Van data-chaos <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">naar bestuurbare feiten.</span>
                </motion.h1>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col gap-6 max-w-xl"
                >
                 <p className="text-lg text-white/70 leading-relaxed font-light" data-testid="text-hero-subtitle">
                    Wij helpen MT’s en data-teams om data te organiseren als een bestuurlijk stuurmiddel. 
                    Niet door meer dashboards te bouwen, maar door strategie, teams, tooling en governance op elkaar af te stemmen — 
                    zodat data klopt, gebruikt wordt en richting geeft aan besluitvorming.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                   <Button 
                      size="lg" 
                      className="bg-white text-background hover:bg-white/90 h-16 px-10 rounded-none text-sm font-mono uppercase tracking-widest flex items-center gap-2 group min-w-[200px]"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      data-testid="button-hero-primary"
                   >
                      Plan kennismaking
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                   </Button>
                   <Button 
                      size="lg" 
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/5 hover:text-white h-16 px-10 rounded-none text-sm font-mono uppercase tracking-widest min-w-[200px]"
                      onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })}
                      data-testid="button-hero-secondary"
                   >
                      Bekijk aanpak
                   </Button>
                 </div>
                 <p className="mt-4 text-xs font-mono uppercase tracking-[0.25em] text-white/40" data-testid="text-hero-proofline">
                   Van analyse tot structurele borging
                 </p>
              </motion.div>
           </div>

           <div className="hidden md:block md:w-1/3">
             <div className="rounded-sm p-6 max-w-xs ml-auto bg-black/80 border border-white/10 shadow-xl shadow-black/40">
               <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 mb-3">Signature metric</p>
               <p className="text-sm text-white/90 mb-4">Als morgen twee dashboards elkaar tegenspreken, is het direct duidelijk wie beslist wat klopt.</p>
               <p className="text-xs text-white/60">Geen extra tooling, maar duidelijke regie op KPI’s, definities en eigenaarschap — belegd bij de juiste rollen in de organisatie.</p>
             </div>
           </div>
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

      {/* Social proof direct onder hero */}
      <SocialProof />

      {/* De regie-vraag */}
      <section className="py-24 bg-surface-light border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start mb-16">
            <div className="relative pl-6 md:pl-10">
              <span className="hidden md:block regie-vertical-line" aria-hidden="true" />
              <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-why-kicker">
                De regievraag achter elk BI-probleem
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6" data-testid="text-why-heading">
                Niet: welk dashboard klopt? <br/>Maar: wie mag beslissen wat klopt.
              </h2>
              <p className="text-white/70 text-lg" data-testid="text-why-body">
                Zolang die vraag niet expliciet belegd is, blijft BI rapportage in plaats van sturing. 
                Het probleem zit zelden in data of tooling, maar in bestuurlijke keuzes: 
                wie bepaalt definities, welke KPI’s zijn leidend en wie is eigenaar van de waarheid.
              </p>
            </div>
            <div className="border border-white/10 bg-card/60 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 mix-blend-screen pointer-events-none" />
              <div className="relative space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40" data-testid="text-why-side-kicker">
                  Onze bestuurlijke lens
                </p>
                <p className="text-lg text-white/80" data-testid="text-why-side-body">
                  We starten niet bij data, dashboards of tools. We starten bij de beslismomenten van het MT: 
                  waar moet richting worden gekozen, waar wordt gestuurd en waar wordt verantwoord. 
                  Pas daarna richten we governance, KPI-structuur, teams en tooling zó in dat deze beslissingen ondersteund worden.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12">
             <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/40 mb-6">Zonder duidelijke regie ontstaat dit:</h3>
             <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="space-y-2">
                   <div className="w-8 h-px bg-primary/50 mb-4" />
                   <p className="text-white/80">Discussies over definities blijven terugkomen</p>
                </div>
                <div className="space-y-2">
                   <div className="w-8 h-px bg-primary/50 mb-4" />
                   <p className="text-white/80">Alles wordt gemeten, niets is leidend</p>
                </div>
                <div className="space-y-2">
                   <div className="w-8 h-px bg-primary/50 mb-4" />
                   <p className="text-white/80">KPI’s zonder eigenaar sturen niemand aan</p>
                </div>
             </div>
             <p className="text-sm font-mono uppercase tracking-[0.1em] text-amber-300/80" data-testid="text-why-result">
                Gevolg: besluitvorming vertraagt, verantwoordelijkheid vervaagt en BI verliest zijn functie als stuurinstrument.
             </p>
          </div>
        </div>
      </section>

      <ForWhoWeWork />

      <AboutFractionalBI />

      <WhatWeDo />

      {/* Hoe we werken – Regiepad */}
      <section className="py-28 bg-surface-alt border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-16 items-start">
            {/* Linkerkolom: framing */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4" data-testid="text-collab-heading">
                Hoe wij regie brengen op BI & data
              </h2>
              <p className="text-white/60 text-lg mb-6" data-testid="text-collab-body">
                Wij werken niet met standaardprogramma’s of vaste doorlooptijden. 
                We nemen tijdelijk de regie op BI & data, vanuit een bestuurlijk perspectief. 
                Dat betekent: meedenken én meebeslissen over prioriteiten, eigenaarschap en inrichting — 
                samen met directie, finance en het BI-team. 
                Soms is dat enkele maanden intensief, soms langer of gefaseerd. De vorm volgt altijd de vraag, niet andersom.
              </p>
            </div>

            {/* Rechterkolom: verticale roadmap */}
            <div className="relative pl-10 border-l border-white/10">
              {/* Fase 1 */}
              <div className="relative mb-10">
                <div className="absolute -left-5 top-1 flex flex-col items-center" aria-hidden="true">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-background text-xs font-mono text-white/80">
                    01
                  </div>
                  <div className="h-16 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
                </div>
                <span className="inline-flex items-center text-[11px] font-mono uppercase tracking-[0.2em] text-primary mb-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10" data-testid="badge-phase-1">
                  Bestuurlijke diagnose
                </span>
                <h3 className="text-xl font-serif text-white mb-1">Waar knelt besluitvorming?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  We starten niet bij dashboards, maar bij de bestuurstafel.
                  In gesprekken met directie, finance, business en BI brengen we de cruciale beslismomenten in kaart: 
                  waar moet gestuurd worden, waar loopt verantwoordelijkheid vast en waar spreken cijfers elkaar tegen?
                  Zo wordt duidelijk welke KPI’s echt leidend moeten zijn — en waar regie ontbreekt.
                </p>
                <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.2em] text-white/50" data-testid="text-phase-1-output">
                  Output: Inzicht in beslismomenten, stuur-KPI’s en regievragen
                </p>
              </div>

              {/* Fase 2 */}
              <div className="relative mb-10">
                <div className="absolute -left-5 top-1 flex flex-col items-center" aria-hidden="true">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-background text-xs font-mono text-white/80">
                    02
                  </div>
                  <div className="h-16 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
                </div>
                <span className="inline-flex items-center text-[11px] font-mono uppercase tracking-[0.2em] text-primary mb-2 px-3 py-1 rounded-full border border-secondary/40 bg-secondary/10" data-testid="badge-phase-2">
                  Regie-agenda & keuzes
                </span>
                <h3 className="text-xl font-serif text-white mb-1">Van alles meten naar gericht sturen</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Op basis van de diagnose maken we scherpe keuzes: wat hoort wél op de BI-agenda, wat bewust niet meer. 
                  We leggen vast welke KPI’s leidend zijn, wie eigenaar is en hoe definities worden bewaakt. 
                  Dit vormt de regie-agenda voor BI, data en rapportage — gedragen door MT en teams.
                </p>
                <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.2em] text-white/50" data-testid="text-phase-2-output">
                  Output: BI-agenda, KPI-structuur en eigenaarschap
                </p>
              </div>

              {/* Fase 3 */}
              <div className="relative">
                <div className="absolute -left-5 top-1 flex flex-col items-center" aria-hidden="true">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-background text-xs font-mono text-white/80">
                    03
                  </div>
                </div>
                <span className="inline-flex items-center text-[11px] font-mono uppercase tracking-[0.2em] text-primary mb-2 px-3 py-1 rounded-full border border-emerald-400/60 bg-emerald-400/10" data-testid="badge-phase-3">
                  Tijdelijk leiderschap & borging
                </span>
                <h3 className="text-xl font-serif text-white mb-1">Regie die blijft werken</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Waar nodig nemen we tijdelijk het BI-leiderschap op ons. 
                  We sturen op prioriteiten, richten governance in, coachen het team en zorgen dat het overleg- en beslisritme daadwerkelijk werkt. 
                  Het doel is altijd hetzelfde: een organisatie die zelfstandig kan sturen, zonder externe afhankelijkheid.
                </p>
                <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.2em] text-white/50" data-testid="text-phase-3-output">
                  Output: Werkend ritme, zelfstandig BI-team en geborgde regie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BentoGrid />

      {/* Impact-sectie (High Contrast) */}
      <section id="impact" className="py-32 bg-primary/10 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
         
         <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight max-w-4xl mx-auto mb-12" data-testid="text-impact-quote">
               "Data zonder regie is ruis. <br/>
               Data met strategie wordt een <span className="text-primary italic">beslissingsmachine.</span>"
            </h2>
            <div className="inline-flex flex-col items-center">
               <span className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2" data-testid="text-impact-kicker">Onze filosofie</span>
               <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">Regiesessie</span>
                 <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
                    Start met een regiesessie <br/>van 60 minuten.
                 </h2>
                 <p className="text-xl text-white/50 font-light max-w-md mb-8" data-testid="text-contact-subtitle">
                    In één uur brengen we scherp: wat is leidend, wat moet stoppen en welk ritme nodig is om echt te sturen
                    op cijfers.
                 </p>
                 <div className="space-y-4 mb-8" data-testid="list-contact-benefits">
                   <p className="text-sm text-white/70">• Helder beeld van waar regie nu lekt.</p>
                   <p className="text-sm text-white/70">• Eerste contouren van een 90-dagen agenda.</p>
                   <p className="text-sm text-white/70">• Concreet advies over volgende stap.</p>
                 </div>
                 <div className="flex gap-8 text-white/40 font-mono text-xs uppercase tracking-widest">
                    <span>Digitaal of op locatie</span>
                    <span>•</span>
                    <span>Binnen 7 dagen mogelijk</span>
                 </div>
              </div>

              <div className="bg-card border border-white/5 p-8 md:p-12 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label htmlFor="contact-name" className="font-mono text-xs text-white/40 uppercase tracking-widest">Naam</label>
                       <input id="contact-name" type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary outline-none transition-colors" placeholder="Uw naam" data-testid="input-contact-name" />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="contact-email" className="font-mono text-xs text-white/40 uppercase tracking-widest">Zakelijk e-mailadres</label>
                       <input id="contact-email" type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary outline-none transition-colors" placeholder="naam@organisatie.nl" data-testid="input-contact-email" />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="contact-context" className="font-mono text-xs text-white/40 uppercase tracking-widest">Korte context</label>
                       <textarea id="contact-context" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="Waar wilt u het in de sessie specifiek over hebben?" data-testid="textarea-contact-context" />
                    </div>
                    
                    <Button size="lg" className="w-full bg-white text-background hover:bg-white/90 h-14 rounded-none font-mono text-xs uppercase tracking-widest mt-4" data-testid="button-contact-submit">
                       Verstuur verzoek
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
