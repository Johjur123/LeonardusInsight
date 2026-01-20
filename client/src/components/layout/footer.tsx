export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h3 className="text-3xl font-serif mb-6 text-white">
              Fractional.BI
            </h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm font-sans">
              Strategisch leiderschap in data. Wij bouwen de brug tussen complexe data en heldere bestuurlijke besluitvorming.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-sans font-medium text-white/40 mb-6 uppercase tracking-wider text-xs">Navigatie</h4>
            <ul className="space-y-4 text-white/80 font-serif">
              <li className="hover:text-white transition-colors cursor-pointer">Onze Visie</li>
              <li className="hover:text-white transition-colors cursor-pointer">Diensten</li>
              <li className="hover:text-white transition-colors cursor-pointer">Over Ons</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-sans font-medium text-white/40 mb-6 uppercase tracking-wider text-xs">Kantoor</h4>
            <div className="space-y-4 text-white/80 font-serif">
              <p>Zuidas, Amsterdam</p>
              <p>info@fractionalbi.nl</p>
              <p>+31 (0)20 123 4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-sans uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Fractional BI.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Algemene Voorwaarden</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
