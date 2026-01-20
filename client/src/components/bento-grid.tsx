import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import cubeImg from "@assets/generated_images/abstract_glass_cube_grid_interface.png";
import chessImg from "@assets/generated_images/minimalist_strategic_chess_piece_in_dark_lighting.png";
import dashImg from "@assets/generated_images/futuristic_dashboard_projection_on_glass.png";

const insights = [
  {
    category: "STRATEGIE",
    title: "Van datapunt naar besluit: zo bouwt u een echte BI-roadmap",
    desc: "Hoe u in 90 dagen duidelijk maakt welke rapportages verdwijnen, welke blijven en welke nieuw nodig zijn.",
    image: cubeImg,
    size: "large"
  },
  {
    category: "LEIDERSCHAP",
    title: "Fractional Head of BI: leiderschap zonder fulltime overhead",
    desc: "Waarom steeds meer organisaties kiezen voor bestuurders op afroep in plaats van het volgende vaste FTE.",
    image: chessImg,
    size: "small"
  },
  {
    category: "TECHNOLOGIE",
    title: "Voorbij het dashboard: sturen op signalen in plaats van tabellen",
    desc: "Van maandelijkse rapportages naar continue monitoring van de uitzonderingen die ertoe doen.",
    image: dashImg,
    size: "small"
  }
];

export function BentoGrid() {
  return (
    <section id="insights" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex justify-between items-end">
           <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase mb-4 block">Laatste inzichten</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Inzichten voor de bestuurskamer</h2>
           </div>
           <button className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest group" data-testid="button-insights-all">
              Alle artikelen
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Large Feature Card */}
          <div className="md:col-span-2 row-span-1 md:row-span-2 group relative overflow-hidden rounded-sm border border-white/5 bg-card">
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
             <img 
                src={insights[0].image} 
                alt="Insight" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" 
             />
             <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-2xl">
                <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] font-mono text-white tracking-widest uppercase mb-6 bg-black/20 backdrop-blur-sm">
                   {insights[0].category}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                   {insights[0].title}
                </h3>
                <p className="text-white/60 text-lg mb-8 line-clamp-2 md:line-clamp-none">
                   {insights[0].desc}
                </p>
                <div className="flex items-center gap-4 text-white font-mono text-xs uppercase tracking-widest group/btn cursor-pointer">
                   Read Article <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </div>
             </div>
          </div>

          {/* Small Cards */}
          {insights.slice(1).map((item, i) => (
             <div key={i} className="group relative overflow-hidden rounded-sm border border-white/5 bg-card flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img 
                   src={item.image} 
                   alt="Insight" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" 
                />
                <div className="relative z-20 p-8">
                   <span className="inline-block px-2 py-1 border border-white/20 rounded-full text-[10px] font-mono text-white tracking-widest uppercase mb-4 bg-black/20 backdrop-blur-sm">
                      {item.category}
                   </span>
                   <h3 className="text-2xl font-serif text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                   </h3>
                   <div className="w-8 h-px bg-white/20 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
