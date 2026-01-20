import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Eén BI-agenda",
    tag: "Agenda",
    description:
      "Een duidelijke lijst van wat wél en niet meer op de BI-agenda staat, afgestemd met MT en teams.",
  },
  {
    title: "Scherpe stuur-KPI's",
    tag: "KPI's",
    description:
      "Een compacte set KPI's met definities, eigenaar en bron zodat discussies over cijfers stoppen.",
  },
  {
    title: "Werkend ritme",
    tag: "Ritme",
    description:
      "Een vast overleg- en beslisritme waarin dashboards leiden tot besluiten in plaats van discussies.",
  },
  {
    title: "Een zelfstandig team",
    tag: "Team",
    description:
      "Een BI- en datateam dat op eigen kracht volgens de nieuwe werkwijze kan blijven leveren.",
  },
];

export function WhatWeDo() {
  return (
    <section id="expertise" className="py-24 bg-surface-light relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-whatwedo-kicker">
            Wat u na 90 dagen heeft
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4" data-testid="text-whatwedo-heading">
            Regie op data, zichtbaar in de praktijk.
          </h2>
          <p className="text-white/60 text-lg" data-testid="text-whatwedo-subtitle">
            In een traject van 90 dagen brengen we orde in agenda, KPI's en ritme – zodat data weer een bestuurlijk
            instrument wordt in plaats van ruis.
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
