import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Fractional Head of BI",
    tag: "Leiderschap",
    description:
      "1–2 dagen per week strategisch BI-leiderschap. Wij nemen eigenaarschap over roadmap, governance en teamrichting.",
  },
  {
    title: "Data- & BI-strategie",
    tag: "Richting",
    description:
      "Een scherpe, uitvoerbare strategie die jouw data-initiatieven koppelt aan concrete businessdoelen en KPI's.",
  },
  {
    title: "Governance & Operating Model",
    tag: "Structuur",
    description:
      "Heldere rollen, processen en besluitlijnen zodat BI niet meer ‘nice to have’ is maar randvoorwaardelijk.",
  },
  {
    title: "Interim BI-lead & transformatie",
    tag: "Executie",
    description:
      "Wanneer er nu iemand nodig is om de boel vlot te trekken: tijdelijk leiderschap met focus op resultaat.",
  },
];

export function WhatWeDo() {
  return (
    <section id="expertise" className="py-24 bg-surface-light relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-whatwedo-kicker">
            Wat we doen
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4" data-testid="text-whatwedo-heading">
            Van losse initiatieven naar één duidelijke BI-agenda.
          </h2>
          <p className="text-white/60 text-lg" data-testid="text-whatwedo-subtitle">
            Wij werken als Fractional Head of BI naast jouw MT. Geen slides op afstand, maar
            meedenken in de boardroom en meebeslissen over de backlog.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group border border-white/10 bg-card/60 p-6 flex flex-col justify-between cursor-pointer hover:border-primary/60 hover:bg-card transition-colors focus-ring-accent"
              data-testid={`card-service-${index}`}
            >
              <div>
                <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-[0.2em] text-white mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {service.tag}
                </span>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white">
                Lees meer
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
