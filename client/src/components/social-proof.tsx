import { motion } from "framer-motion";

const clients = [
  { name: "Unilever", style: "font-serif tracking-widest uppercase" },
  { name: "bol.com", style: "font-sans font-black tracking-tighter lowercase text-xl" },
  { name: "Louwman", style: "font-serif font-bold tracking-wide" },
  { name: "ErasmusMC", style: "font-mono font-medium tracking-tight uppercase" },
];

export function SocialProof() {
  return (
    <section className="border-t border-white/5 bg-background/80 backdrop-blur-sm py-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
         <div className="w-full md:w-auto md:border-r border-white/10 md:pr-12 text-center md:text-left shrink-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-2">Eerdere trajecten</span>
            <span className="font-serif text-xl text-white">Vertrouwd door leiders</span>
         </div>
         
         <div className="flex-1 overflow-hidden w-full relative mask-gradient-x">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
            
            <div className="flex whitespace-nowrap">
              <motion.div 
                className="flex gap-20 items-center"
                animate={{ x: "-50%" }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, i) => (
                  <span key={i} className={`text-white/40 hover:text-white transition-colors duration-300 text-2xl whitespace-nowrap ${client.style}`}>
                    {client.name}
                  </span>
                ))}
              </motion.div>
            </div>
         </div>
      </div>
    </section>
  );
}
