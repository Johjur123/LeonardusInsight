export function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold font-heading mb-6">
              FRACTIONAL<span className="text-secondary">.</span>BI
            </h3>
            <p className="text-white/50 max-w-md text-lg font-light leading-relaxed">
              Strategisch leiderschap in een data-gedreven wereld. Wij transformeren data chaos naar heldere, bestuurlijke inzichten.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Expertise</h4>
            <ul className="space-y-4 text-white/50">
              <li className="hover:text-secondary transition-colors cursor-pointer">Maturity Scan</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Fractional Leadership</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Data Governance</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Team Strategy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li>info@fractionalbi.nl</li>
              <li>Amsterdam, Nederland</li>
              <li>+31 (0)20 123 4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
          <div>© {new Date().getFullYear()} Fractional BI. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
