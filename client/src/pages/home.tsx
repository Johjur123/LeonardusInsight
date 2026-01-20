import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  TrendingUp,
  LineChart,
  Users,
  ShieldCheck,
  Quote
} from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/abstract_architectural_structure_representing_stability.png";
import boardroomImg from "@assets/generated_images/professional_modern_boardroom_discussion_warm_lighting.png";

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary font-sans">
      <Navbar />

      {/* Hero - Editorial Style */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block py-1 px-3 border border-primary/20 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-8 bg-primary/5">
                  Strategic Data Leadership
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-8 text-foreground text-balance">
                  Van Data Chaos naar <span className="italic text-primary">Bestuurlijk Inzicht.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 font-light">
                  Wij helpen organisaties hun BI-capaciteit professioneel in te richten. Niet als externe bouwer, maar als uw strategisch partner aan tafel.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-sm text-base"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Plan Kennismaking
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-foreground hover:bg-transparent hover:text-primary p-0 h-14 text-base group"
                    onClick={() => document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Onze Visie <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-[4/5] md:aspect-square lg:aspect-[3/4]"
              >
                <img 
                  src={heroImg} 
                  alt="Abstract Strategy Structure" 
                  className="object-cover w-full h-full shadow-2xl rounded-sm"
                />
                <div className="absolute -bottom-8 -left-8 bg-background p-8 shadow-xl max-w-xs hidden md:block border border-border">
                  <p className="font-serif italic text-lg text-primary">
                    "Data zonder strategie is slechts ruis."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Quote Section */}
      <section id="vision" className="py-24 bg-secondary/10 border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary/20 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-foreground mb-8">
              "Veel organisaties verdrinken in dashboards, maar drogen uit op inzicht. Er wordt hard gewerkt aan rapportages, maar de besluitvorming verandert niet."
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-12">
              <div className="text-left">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />Het Probleem
                </h4>
                <p className="text-muted-foreground">Focus op techniek, niet op proces.</p>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />De Gevolg
                </h4>
                <p className="text-muted-foreground">Ongebruikte data & dure tools.</p>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />De Oplossing
                </h4>
                <p className="text-muted-foreground">Regie, Governance & Strategie.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Editorial List */}
      <section id="expertise" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-serif mb-6 text-foreground">Onze Expertise</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wij bieden geen standaard pakketten, maar maatwerk leiderschap. Of het nu gaat om een scan van de huidige situatie of structurele invulling van de rol.
              </p>
              <Button variant="outline" className="rounded-sm border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                Bekijk Volledig Aanbod
              </Button>
            </div>
            
            <div className="lg:col-span-8 space-y-12">
              {[
                {
                  title: "Fractional Head of BI",
                  desc: "Uw strategisch leider op afroep. Voor 1-2 dagen per week nemen wij de verantwoordelijkheid voor uw BI-roadmap, team en resultaten.",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  title: "Maturity & Strategy Scan",
                  desc: "Een scherpe analyse van uw huidige data-volwassenheid. Wij identificeren de kloof tussen ambitie en realiteit en leveren een concreet groeiplan.",
                  icon: <LineChart className="w-6 h-6" />
                },
                {
                  title: "Data Governance & Team Design",
                  desc: "Het fundament onder uw data. Wij zetten de standaarden, processen en rollen neer die nodig zijn voor betrouwbare en schaalbare inzichten.",
                  icon: <ShieldCheck className="w-6 h-6" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group flex gap-6 md:gap-10 border-t border-border pt-10"
                >
                  <div className="hidden md:flex shrink-0 w-16 h-16 bg-background border border-border items-center justify-center rounded-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Boardroom Section */}
      <section id="method" className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={boardroomImg} 
                alt="Boardroom Meeting" 
                className="w-full shadow-2xl rounded-sm opacity-90"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif mb-8 text-white">Niet bouwen, <br/>maar Architectuur.</h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
                <p>
                  De traditionele consultant komt binnen om tickets weg te werken. Uurtje-factuurtje. Zodra ze weg zijn, stort de kennis in.
                </p>
                <p>
                  Als <strong>Fractional Leader</strong> werk ik anders. Ik ben onderdeel van uw managementteam. Ik bouw geen rapportages, ik bouw de organisatie die rapportages mogelijk maakt.
                </p>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-serif text-white mb-1">10+</div>
                      <div className="text-sm uppercase tracking-wider text-white/50">Jaar Ervaring</div>
                    </div>
                    <div>
                      <div className="text-3xl font-serif text-white mb-1">100%</div>
                      <div className="text-sm uppercase tracking-wider text-white/50">Onafhankelijk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="bg-background shadow-2xl p-8 md:p-16 border border-border">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif mb-4 text-foreground">Klaar voor de volgende stap?</h2>
              <p className="text-muted-foreground">
                Plan een vrijblijvend strategisch gesprek om uw uitdagingen te bespreken.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Naam</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors" placeholder="Uw naam" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Bedrijf</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors" placeholder="Uw organisatie" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors" placeholder="naam@bedrijf.nl" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Bericht</label>
                <textarea className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="Waar loopt u tegenaan?" />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 min-w-[200px] h-14 text-lg rounded-sm">
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
