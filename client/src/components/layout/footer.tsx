import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-white pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight">
              Klaar om <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary tosecondary">uw datasturing opnieuw te definiëren?</span>
            </h3>
            <div className="flex gap-4">
               <a href="mailto:info@fractionalbi.nl" className="group flex items-center gap-2 text-lg font-mono text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-primary pb-1">
                  info@fractionalbi.nl
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
               </a>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-mono text-xs text-primary mb-8 uppercase tracking-widest">Sitemap</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Insights</li>
              <li className="hover:text-white transition-colors cursor-pointer">Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs text-primary mb-8 uppercase tracking-widest">Socials</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-white transition-colors cursor-pointer">Twitter / X</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medium</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-xs text-primary mb-8 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Fractional BI. Alle rechten voorbehouden.</div>
          <div className="mt-4 md:mt-0">Amsterdam • Remote-first</div>
        </div>
      </div>
    </footer>
  );
}
