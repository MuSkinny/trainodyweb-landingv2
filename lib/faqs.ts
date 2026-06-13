// Unica fonte di verità per le FAQ.
// Importato sia da components/faq.tsx (UI) sia da components/json-ld.tsx (FAQPage JSON-LD).

import type { Localized } from "./i18n";

export type FAQType = {
  question: Localized;
  response: Localized;
};

export const faqs: FAQType[] = [
  {
    question: {
      it: `Cosa ottengo da Trainody?`,
      en: "What do I get from Trainody?",
      es: "¿Qué obtengo con Trainody?",
    },
    response: {
      it: `Ottieni un portale dove poter gestire in totale autonomia e immediatezza i tuoi clienti. Stilare
            anamnesi, profili del cliente, piani di allenamento con spiegazioni e video esplicativi. A seconda del
            piano che selezionerai si avrà più o meno flessibilità e libertà di gestione dei propri clienti.`,
      en: "You get a portal where you can fully manage your clients independently and immediately. Create medical histories, client profiles, workout plans with explanations and explanatory videos. Depending on the plan you select, you'll have varying degrees of flexibility and freedom in managing your clients.",
      es: "Obtienes un portal donde gestionar a tus clientes con total autonomía e inmediatez. Puedes elaborar anamnesis, perfiles de cliente y planes de entrenamiento con explicaciones y vídeos demostrativos. Según el plan que selecciones tendrás mayor o menor flexibilidad y libertad para gestionar a tus clientes.",
    },
  },
  {
    question: {
      it: `È possibile visionare in tempo reale l’andamento degli atleti?`,
      en: "Is it possible to monitor athletes' progress in real-time?",
      es: "¿Es posible seguir en tiempo real el progreso de los atletas?",
    },
    response: {
      it: `Si. Offriamo un’applicazione mobile che consente agli atleti di segnare
            progressi, dubbi e video delle esecuzioni in modo da avere un contatto diretto coach-atleta,
            riducendo al massimo gli errori e massimizzando i risultati.`,
      en: "Yes. We offer a mobile application that allows athletes to log progress, questions, and execution videos to maintain direct coach-athlete contact, minimizing errors and maximizing results.",
      es: "Sí. Ofrecemos una aplicación móvil que permite a los atletas registrar progresos, dudas y vídeos de las ejecuciones para mantener un contacto directo entrenador-atleta, reduciendo al máximo los errores y maximizando los resultados.",
    },
  },
  {
    question: {
      it: `Posso provare Trainody gratis?`,
      en: "Can I try Trainody for free?",
      es: "¿Puedo probar Trainody gratis?",
    },
    response: {
      it: `Si. E' possibile gestire gratuitamente fino ad un massimo di due clienti. Il piano gratuito è pensato per prendere dimestichezza con la piattaforma e capire se fa al caso tuo.`,
      en: "Yes. You can manage up to two clients for free. The free plan is designed to help you familiarize yourself with the platform and determine if it's right for you.",
      es: "Sí. Es posible gestionar gratis hasta un máximo de dos clientes. El plan gratuito está pensado para familiarizarte con la plataforma y descubrir si se adapta a lo que necesitas.",
    },
  },
];
