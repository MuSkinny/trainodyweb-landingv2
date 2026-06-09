import { ClipboardList, Route, TrendingUp, UserPlus } from "lucide-react";
import ScrollReveal from "./animations/scroll-reveal";

const HowItWorks = ({ lang }: { lang: string }) => {
  if (!lang || (lang !== "it" && lang !== "en")) return null;
  const it = lang === "it";

  const steps = it
    ? [
        {
          n: "01",
          Icon: UserPlus,
          title: "Registrati gratis",
          desc: "Crea il tuo account e configura il profilo in 2 minuti, senza carta di credito.",
        },
        {
          n: "02",
          Icon: ClipboardList,
          title: "Aggiungi clienti e crea le schede",
          desc: "Schede personalizzate, calendario e video esercizi: tutto in pochi clic.",
        },
        {
          n: "03",
          Icon: TrendingUp,
          title: "Monitora e fai crescere il business",
          desc: "Progressi in tempo reale, chat e pagamenti in un'unica piattaforma.",
        },
      ]
    : [
        {
          n: "01",
          Icon: UserPlus,
          title: "Sign up for free",
          desc: "Create your account and set up your profile in 2 minutes, no credit card.",
        },
        {
          n: "02",
          Icon: ClipboardList,
          title: "Add clients and build plans",
          desc: "Personalized workout plans, calendar and exercise videos in a few clicks.",
        },
        {
          n: "03",
          Icon: TrendingUp,
          title: "Track and grow your business",
          desc: "Real-time progress, chat and payments in a single platform.",
        },
      ];

  return (
    <section className="w-full flex flex-col gap-y-12 pt-24 pb-10">
      <ScrollReveal delay={0.2}>
        <div className="w-full flex flex-col items-center px-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
            <Route className="size-4 text-primary" />
            <span className="text-foreground text-xs uppercase tracking-wider">
              {it ? "Come funziona" : "How it works"}
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl uppercase lg:text-5xl text-balance text-center tracking-tight">
            {it ? "Inizia in 3 step" : "Get started in 3 steps"}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
            {it
              ? "Dalla registrazione alla gestione completa dei clienti."
              : "From sign-up to fully managing your clients."}
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map(({ n, Icon, title, desc }) => (
            <div
              key={n}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
            >
              {/* numero + connettore */}
              <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-4xl leading-none text-primary">
                  {n}
                </span>
                <span className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-primary/30" />
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Icon className="size-5" />
                </span>
              </div>

              <h3 className="font-display text-lg uppercase leading-tight tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
