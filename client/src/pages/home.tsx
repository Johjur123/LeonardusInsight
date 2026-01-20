import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  BrainCircuit, 
  Users, 
  Lightbulb, 
  Target, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/dark_premium_abstract_data_wave_background.png";
import aboutBg from "@assets/generated_images/abstract_connected_nodes_strategy_visualization.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
  };

  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-secondary selection:text-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Data Strategy Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary tracking-widest uppercase text-sm font-bold">Strategic Data Consulting</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium leading-[1.1] mb-8 text-white">
              Van Data Chaos <br />
              Naar <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Strategie.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-10 font-light">
              Transformeer uw data-organisatie met leiderschap op maat. 
              Geen dashboards die stof happen, maar inzicht dat stuurt.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-background font-bold h-14 px-10 rounded-none text-lg transition-all hover:scale-105"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Strategisch Gesprek
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 h-14 px-10 rounded-none text-lg backdrop-blur-sm"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ontdek Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Statistics / Quick Facts */}
      <section className="border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { number: "80%", label: "Van data onbenut" },
              { number: "100%", label: "Focus op Strategie" },
              { number: "1-2", label: "Dagen per week" },
              { number: "24/7", label: "Strategisch Inzicht" }
            ].map((stat, i) => (
              <div key={i} className="py-12 px-6 text-center group hover:bg-white/5 transition-colors duration-500">
                <div className="text-4xl md:text-5xl font-heading font-medium text-white mb-2 group-hover:text-secondary transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Insight Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-8">
                Het probleem is niet de techniek, <span className="text-white/40">maar de regie.</span>
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-white/60 leading-relaxed">
                Veel organisaties verdrinken in dashboards, maar drogen uit op inzicht. 
                Er wordt hard gewerkt aan rapportages, maar de besluitvorming verandert niet.
              </p>
              <div className="space-y-6">
                {[
                  "Dashboards worden gebouwd, maar niet gebruikt.",
                  "Afhankelijkheid van één enkele specialist.",
                  "Geen duidelijke definitie van KPI's.",
                  "Data leeft niet in de boardroom."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-px bg-white/20 group-hover:bg-secondary transition-colors duration-500" />
                    <span className="text-xl text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - High End Cards */}
      <section id="services" className="py-32 bg-black relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Onze Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white">Strategic Intelligence</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Fractional Head of BI",
                desc: "Leiderschap op afroep. Ik fungeer als uw strategisch partner voor 1-2 dagen per week, zonder de overhead van een fulltime executive."
              },
              {
                icon: <BrainCircuit className="w-8 h-8" />,
                title: "Maturity & Strategy Scan",
                desc: "Een diepgaande analyse van uw data-landschap. Wij identificeren de gaten tussen uw data en uw bedrijfsdoelstellingen."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Governance & Team Design",
                desc: "Het neerzetten van schaalbare structuren. Van datakwaliteit tot teamrollen, wij bouwen het fundament voor groei."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-10 glass-card rounded-none hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="text-secondary w-6 h-6" />
                </div>
                <div className="mb-8 text-secondary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-heading text-white mb-4 group-hover:text-secondary transition-colors">{service.title}</h4>
                <p className="text-white/50 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Asymmetrical */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                 <img 
                  src={aboutBg} 
                  alt="Network Visualization" 
                  className="w-full rounded-sm shadow-2xl opacity-80"
                />
                <div className="absolute -bottom-10 -right-10 bg-secondary p-10 hidden md:block">
                  <p className="text-background font-bold text-lg font-heading max-w-[200px]">
                    "Data zonder strategie is slechts ruis."
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-heading mb-8">Niet bouwen, <br/>maar <span className="text-white/40">Architectuur.</span></h2>
              <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  De traditionele consultant komt binnen om tickets weg te werken en dashboards te bouwen. Uurtje-factuurtje. Zodra ze weg zijn, stort de kennis in.
                </p>
                <p>
                  Als <strong>Fractional Leader</strong> werk ik anders. Ik ben onderdeel van uw managementteam. Ik bouw geen rapportages, ik bouw de organisatie die rapportages mogelijk maakt.
                </p>
                <p>
                  Ik focus op eigenaarschap, processen en lange termijn waarde. Zodat u uiteindelijk zónder mij kunt.
                </p>
              </div>
              <div className="mt-10">
                <Button variant="link" className="text-secondary p-0 text-lg group">
                  Lees meer over de visie <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-white text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-1/4" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-heading mb-8 text-black">Ready to <br/>Lead?</h2>
              <p className="text-xl text-black/60 max-w-md mb-12">
                Zet vandaag de eerste stap naar een volwassen data-organisatie. Plan een vrijblijvende strategiesessie.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Direct strategisch inzicht</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Geen verkooppraatje, maar inhoud</span>
                </div>
              </div>
            </div>

            <div className="bg-background p-10 shadow-2xl relative">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Naam</label>
                    <input type="text" className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-secondary outline-none transition-colors rounded-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Bedrijf</label>
                    <input type="text" className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-secondary outline-none transition-colors rounded-none" placeholder="Company Ltd." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-secondary outline-none transition-colors rounded-none" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Uitdaging</label>
                  <textarea className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-secondary outline-none transition-colors rounded-none h-24 resize-none" placeholder="Vertel kort over uw situatie..." />
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-background font-bold py-6 rounded-none mt-4 text-lg">
                  Vraag Gesprek Aan
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
