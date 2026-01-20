import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frequencyOptions = [
  "Nooit",
  "Af en toe",
  "Bijna elke meeting",
] as const;

const initiativesOptions = [
  "1–3",
  "4–7",
  "> 7",
] as const;

const feelingOptions = [
  "Rust",
  "Onrust",
  "Chaos",
] as const;

type Frequency = (typeof frequencyOptions)[number];
type Initiatives = (typeof initiativesOptions)[number];
type Feeling = (typeof feelingOptions)[number];

function getDiagnosis(f: Frequency, i: Initiatives, fe: Feeling) {
  if (fe === "Chaos" || i === "> 7") {
    return {
      label: "Data als ruis",
      text: "Uw organisatie stuurt op te veel initiatieven tegelijk. De eerste stap is een 90-dagen BI-roadmap met een harde niet-doen-lijst.",
    };
  }
  if (fe === "Onrust" || i === "4–7") {
    return {
      label: "Data als bijzaak",
      text: "De basis is aanwezig, maar uw BI mist mandaat. Een Fractional Head of BI kan helpen om governance en prioriteit te verankeren op C-level.",
    };
  }
  return {
    label: "Data als motor",
    text: "U heeft al veel op orde. De winst zit in verfijning van KPI's en het scherper maken van de link tussen data en strategie.",
  };
}

export function DecisionSimulator() {
  const [frequency, setFrequency] = useState<Frequency>("Af en toe");
  const [initiatives, setInitiatives] = useState<Initiatives>("4–7");
  const [feeling, setFeeling] = useState<Feeling>("Onrust");

  const diagnosis = getDiagnosis(frequency, initiatives, feeling);

  return (
    <section className="py-24 bg-surface-alt border-t border-white/5" id="simulator">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-sim-kicker">
            Decision Simulator
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4" data-testid="text-sim-heading">
            Hoe voelt besluitvorming in uw boardroom?
          </h2>
          <p className="text-white/60 text-lg" data-testid="text-sim-subtitle">
            Beantwoord drie korte vragen en zie in welke fase uw organisatie zich bevindt. Geen rapport, wel een scherp startpunt voor een gesprek.
          </p>
        </div>

        <div className="bg-card border border-white/10 p-6 md:p-8 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 opacity-60 pointer-events-none" />
          <div className="relative space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-[11px] text-white/40 uppercase tracking-widest" data-testid="label-sim-frequency">
                Hoe vaak wordt een besluit herzien nadat de cijfers op tafel liggen?
              </label>
              <div className="flex flex-wrap gap-2">
                {frequencyOptions.map((opt) => (
                  <button
                    key={opt}
                    data-testid={`button-sim-frequency-${opt}`}
                    onClick={() => setFrequency(opt)}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer focus-ring-accent ${
                      frequency === opt
                        ? "bg-white text-background border-white"
                        : "bg-black/30 text-white/70 border-white/20 hover:border-white/60"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[11px] text-white/40 uppercase tracking-widest" data-testid="label-sim-initiatives">
                Hoeveel BI-initiatieven lopen er nu parallel?
              </label>
              <div className="flex flex-wrap gap-2">
                {initiativesOptions.map((opt) => (
                  <button
                    key={opt}
                    data-testid={`button-sim-initiatives-${opt}`}
                    onClick={() => setInitiatives(opt)}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer focus-ring-accent ${
                      initiatives === opt
                        ? "bg-white text-background border-white"
                        : "bg-black/30 text-white/70 border-white/20 hover:border-white/60"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[11px] text-white/40 uppercase tracking-widest" data-testid="label-sim-feeling">
                Welk gevoel heeft u bij uw huidige datasturing?
              </label>
              <div className="flex flex-wrap gap-2">
                {feelingOptions.map((opt) => (
                  <button
                    key={opt}
                    data-testid={`button-sim-feeling-${opt}`}
                    onClick={() => setFeeling(opt)}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer focus-ring-accent ${
                      feeling === opt
                        ? "bg-white text-background border-white"
                        : "bg-black/30 text-white/70 border-white/20 hover:border-white/60"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={diagnosis.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-4 p-5 bg-black/50 border border-white/20"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-2" data-testid="text-sim-diagnosis-label">
                  {diagnosis.label}
                </p>
                <p className="text-sm text-white/80" data-testid="text-sim-diagnosis-text">
                  {diagnosis.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
