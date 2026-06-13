import { ClipboardList, Route, TrendingUp, UserPlus } from "lucide-react";
import ScrollReveal from "./animations/scroll-reveal";
import { isLang, type Lang } from "@/lib/i18n";

const stepIcons = [UserPlus, ClipboardList, TrendingUp];

const copy: Record<
  Lang,
  {
    badge: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  }
> = {
  it: {
    badge: "Come funziona",
    title: "Inizia in 3 step",
    subtitle: "Dalla registrazione alla gestione completa dei clienti.",
    steps: [
      {
        title: "Registrati gratis",
        desc: "Crea il tuo account e configura il profilo in 2 minuti, senza carta di credito.",
      },
      {
        title: "Aggiungi clienti e crea le schede",
        desc: "Schede personalizzate, calendario e video esercizi: tutto in pochi clic.",
      },
      {
        title: "Monitora e fai crescere il business",
        desc: "Progressi in tempo reale, chat e pagamenti in un'unica piattaforma.",
      },
    ],
  },
  en: {
    badge: "How it works",
    title: "Get started in 3 steps",
    subtitle: "From sign-up to fully managing your clients.",
    steps: [
      {
        title: "Sign up for free",
        desc: "Create your account and set up your profile in 2 minutes, no credit card.",
      },
      {
        title: "Add clients and build plans",
        desc: "Personalized workout plans, calendar and exercise videos in a few clicks.",
      },
      {
        title: "Track and grow your business",
        desc: "Real-time progress, chat and payments in a single platform.",
      },
    ],
  },
  es: {
    badge: "Cómo funciona",
    title: "Empieza en 3 pasos",
    subtitle: "Del registro a la gestión completa de tus clientes.",
    steps: [
      {
        title: "Regístrate gratis",
        desc: "Crea tu cuenta y configura tu perfil en 2 minutos, sin tarjeta de crédito.",
      },
      {
        title: "Añade clientes y crea las rutinas",
        desc: "Rutinas personalizadas, calendario y vídeos de ejercicios: todo en pocos clics.",
      },
      {
        title: "Supervisa y haz crecer tu negocio",
        desc: "Progreso en tiempo real, chat y pagos en una única plataforma.",
      },
    ],
  },
};

const HowItWorks = ({ lang }: { lang: string }) => {
  if (!isLang(lang)) return null;
  const t = copy[lang];

  const steps = t.steps.map((step, i) => ({
    ...step,
    n: `0${i + 1}`,
    Icon: stepIcons[i],
  }));

  return (
    <section className="w-full flex flex-col gap-y-12 pt-24 pb-10">
      <ScrollReveal delay={0.2}>
        <div className="w-full flex flex-col items-center px-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
            <Route className="size-4 text-primary" />
            <span className="text-foreground text-xs uppercase tracking-wider">
              {t.badge}
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl uppercase lg:text-5xl text-balance text-center tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
            {t.subtitle}
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
