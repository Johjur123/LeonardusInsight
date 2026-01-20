import aboutImg from "@assets/generated_images/senior_consultant_in_modern_meeting_room.png";

export function AboutFractionalBI() {
  return (
    <section className="py-24 bg-surface-light border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-about-kicker">
            Over Fractional BI
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4" data-testid="text-about-heading">
            Eén been in de boardroom, één been in het datateam.
          </h2>
          <p className="text-white/60 text-lg mb-6" data-testid="text-about-body">
            Wij zijn geen implementatiepartij die tools verkoopt. Als Fractional Head of BI nemen we tijdelijk de verantwoordelijkheid voor uw datasturing – zodat u sneller betere besluiten neemt, en daarna weer zonder ons verder kunt.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li data-testid="text-about-principle-1">• Boardroom eerst, tooling daarna.</li>
            <li data-testid="text-about-principle-2">• We kiezen net zo scherp wat we níet doen.</li>
            <li data-testid="text-about-principle-3">• Altijd tijdelijk, nooit vrijblijvend.</li>
          </ul>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/20 blur-3xl opacity-60" />
          <div className="relative border border-white/10 bg-black/40 overflow-hidden">
            <img
              src={aboutImg}
              alt="Strategisch BI-consultant in gesprek met bestuur"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              data-testid="img-about-consultant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
