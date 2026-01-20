import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const personas = ["CEO", "CFO", "Head of BI", "Private Equity"] as const;
const challenges = [
  "Versnipperde rapportages",
  "Geen BI-mandaat in de board",
  "Te veel tooling, te weinig richting",
  "Post-merger integratie",
] as const;

type Persona = (typeof personas)[number];
type Challenge = (typeof challenges)[number];

const recommendations: Record<Persona, Record<Challenge, { headline: string; nextStep: string }>> = {
  CEO: {
    "Versnipperde rapportages": {
      headline: "Één versie van de waarheid voor elke boardmeeting.",
      nextStep: "Roadmap-sessie: van 12 dashboards naar 3 beslisrapporten.",
    },
    "Geen BI-mandaat in de board": {
      headline: "Maak van BI een strategische stoel aan tafel.",
      nextStep: "Framing van data-thema's voor de komende 3 kwartaalmeetings.",
    },
    "Te veel tooling, te weinig richting": {
      headline: "Stop met tools stapelen, start met sturen.",
      nextStep: "Architectuurschets die tooling koppelt aan concrete KPI-besluiten.",
    },
    "Post-merger integratie": {
      headline: "Één dataverhaal over alle entiteiten heen.",
      nextStep: "BI-integratieplan voor de eerste 180 dagen na closing.",
    },
  },
  CFO: {
    "Versnipperde rapportages": {
      headline: "Van Excel-oorlog naar realtime stuurinformatie.",
      nextStep: "Design van een Executive Financial Dashboard.",
    },
    "Geen BI-mandaat in de board": {
      headline: "Zet finance aan het roer van de datadiscussie.",
      nextStep: "Herpositionering van BI onder de CFO met duidelijke governance.",
    },
    "Te veel tooling, te weinig richting": {
      headline: "Elke euro in tooling moet zich terugbetalen in marge.",
      nextStep: "Value-case per BI-initiatie en prioritering.",
    },
    "Post-merger integratie": {
      headline: "Consistente P&L en KPI's over alle labels.",
      nextStep: "Blueprint voor consolidatie van finance-rapportages.",
    },
  },
  "Head of BI": {
    "Versnipperde rapportages": {
      headline: "Breng rust in de backlog, focus op impact.",
      nextStep: "Quarterly BI-roadmap met duidelijke niet-doen-lijst.",
    },
    "Geen BI-mandaat in de board": {
      headline: "Van uitvoerder naar strategische sparringpartner.",
      nextStep: "Positioneringsdocument voor BI richting C-level.",
    },
    "Te veel tooling, te weinig richting": {
      headline: "Eén duidelijke architectuur, minder brandjes blussen.",
      nextStep: "Review van BI-landschap en target architecture.",
    },
    "Post-merger integratie": {
      headline: "Bescherm je team tegen integratie-chaos.",
      nextStep: "Governance-model voor gezamenlijke BI-functie.",
    },
  },
  "Private Equity": {
    "Versnipperde rapportages": {
      headline: "Portfolio-breed inzicht zonder spreadsheetsafari.",
      nextStep: "Template voor board packs over alle participaties.",
    },
    "Geen BI-mandaat in de board": {
      headline: "Data als versneller van exit value, niet als bijproduct.",
      nextStep: "Data-value thesis per deal.",
    },
    "Te veel tooling, te weinig richting": {
      headline: "Minimal viable datastack over het hele portfolio.",
      nextStep: "Standard stack die je bij elke buy-in kunt landen.",
    },
    "Post-merger integratie": {
      headline: "Snellere synergie door één datataal.",
      nextStep: "90-dagen BI-integratieplan post-merger.",
    },
  },
};

export function NeedSelector() {
  const [persona, setPersona] = useState<Persona>("CEO");
  const [challenge, setChallenge] = useState<Challenge>("Versnipperde rapportages");

  const current = recommendations[persona][challenge];

  return (
    <section id="expertise" className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block">
            Need Selector
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Wat is uw huidige <span className="text-primary italic">data-vraagstuk?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl">
            Kies de combinatie die het dichtst bij uw realiteit ligt. U krijgt direct een
            scherp startpunt voor een gesprek op board-niveau.
          </p>
        </div>

        <div className="bg-card border border-white/10 p-6 md:p-8 rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-mono text-[11px] text-white/40 uppercase tracking-widest">
                  Ik ben een
                </label>
                <select
                  data-testid="select-persona"
                  className="w-full bg-background border border-white/10 px-4 py-3 text-sm text-white/90 focus:border-primary outline-none cursor-pointer"
                  value={persona}
                  onChange={(e) => setPersona(e.target.value as Persona)}
                >
                  {personas.map((p) => (
                    <option key={p} value={p} className="bg-background text-white">
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[11px] text-white/40 uppercase tracking-widest">
                  en mijn grootste uitdaging is
                </label>
                <select
                  data-testid="select-challenge"
                  className="w-full bg-background border border-white/10 px-4 py-3 text-sm text-white/90 focus:border-primary outline-none cursor-pointer"
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value as Challenge)}
                >
                  {challenges.map((c) => (
                    <option key={c} value={c} className="bg-background text-white">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={persona + challenge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-4 p-5 bg-black/40 border border-white/10"
              >
                <p
                  data-testid="text-need-selector-headline"
                  className="text-white text-lg font-serif leading-snug mb-3"
                >
                  {current.headline}
                </p>
                <p
                  data-testid="text-need-selector-nextstep"
                  className="text-white/60 text-sm font-mono tracking-wide"
                >
                  {current.nextStep}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              data-testid="button-need-selector-cta"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white mt-4"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Plan verkennend gesprek
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
