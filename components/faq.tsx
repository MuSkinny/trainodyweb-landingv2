import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { getDictionary } from "@/lib/dictionary";
import { faqs, type FAQType } from "@/lib/faqs";
import { isLang } from "@/lib/i18n";
import { MessageCircleQuestion } from "lucide-react"

const FAQ = async ({
    lang
}: {
    lang: string
}) => {

    if(!isLang(lang)) return
    const dict = await getDictionary(lang)

    const cta = {
        it: { question: "Hai altre domande? Siamo qui per aiutarti.", button: "Scrivici" },
        en: { question: "Still have questions? We're here to help.", button: "Contact us" },
        es: { question: "¿Tienes más preguntas? Estamos aquí para ayudarte.", button: "Escríbenos" },
    }[lang]

    return(
        <section id="faq" className="w-full flex flex-col pt-24 pb-24 px-6">
            <div className="w-full flex flex-col items-center py-8">
                <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
                    <MessageCircleQuestion className="size-4 text-primary" />
                    <span className="text-foreground text-xs uppercase tracking-wider">FAQ</span>
                </div>

                <h2 className="mt-5 font-display text-3xl uppercase lg:text-5xl text-balance text-center tracking-tight">{dict.faq.title}</h2>
                <p className="mt-3 max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
                    {dict.faq.subtitle}
                </p>
            </div>

            <div className="w-full max-w-3xl mx-auto">
                <Accordion type="multiple" className="flex flex-col gap-3">
                    {
                        faqs.map((faq: FAQType, index: number ) => (
                            <AccordionItem
                                value={`item-${index}`}
                                key={index}
                                className="rounded-xl border border-border bg-surface px-5 transition-colors data-[state=open]:border-primary/40"
                            >
                                <AccordionTrigger className="py-5 text-left text-base md:text-lg hover:no-underline [&>svg]:size-5 [&>svg]:text-primary">
                                    {faq.question[lang]}
                                </AccordionTrigger>
                                <AccordionContent className="whitespace-pre-line pb-5 text-base leading-relaxed text-muted-foreground">
                                    {faq.response[lang]}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>

                {/* CTA contatto */}
                <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-6 py-8 text-center">
                    <p className="text-foreground/80">
                        {cta.question}
                    </p>
                    <a
                        href="mailto:info@trainody.com"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                        {cta.button}
                    </a>
                </div>
            </div>
        </section>
    )
}
  

export default FAQ