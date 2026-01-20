import { ArrowRight } from "lucide-react";

const segments = [
  {
    id: "board",
    title: "Directie & Raad van Bestuur",
    description:
      "U wilt beslissen op basis van één versie van de waarheid – niet op concurrenterende decks en Excel-sheets.",
  },
  {
    id: "cfo",
    title: "CFO & Finance",
    description:
      "U zoekt rust in de rapportagekalender en scherpe KPI's die marge, cash en risico in één blik laten zien.",
  },
  {
    id: "bi",
    title: "Head of BI / Data & Analytics",
    description:
      "U zit klem tussen verzoeken uit de business en een backlog die elke week groeit in plaats van krimpt.",
  },
  {
    id: "pe",
    title: "Private Equity & Portfolioteams",
    description:
      "U wilt portfolio-breed inzicht zónder dat elke participatie zijn eigen BI-speeltuin opzet.",
  },
];

export function ForWhoWeWork() {
  const handleClick = (targetId: string) => {
    const el = document.querySelector("#expertise");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-forwho-kicker">
            Voor wie we werken
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4" data-testid="text-forwho-heading">
            Data als bestuurder, niet als bijzaak.
          </h2>
          <p className="text-white/60 text-lg" data-testid="text-forwho-subtitle">
            Onze trajecten zijn ontworpen voor leiders die verantwoordelijkheid dragen voor P&L, strategie en portfolio – en die voelen dat hun huidige BI daar nog niet op aansluit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <button
              key={segment.id}
              onClick={() => handleClick(segment.id)}
              className="group text-left border border-white/10 bg-card/40 hover:bg-card/80 hover:border-primary/60 transition-colors p-6 flex flex-col justify-between focus-ring-accent cursor-pointer"
              data-testid={`card-segment-${index}`}
            >
              <div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">
                  {segment.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{segment.description}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white">
                Zie relevante uitdagingen
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
