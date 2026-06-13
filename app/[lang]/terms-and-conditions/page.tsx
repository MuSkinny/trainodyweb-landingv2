import TermsAndConditionsEN from "@/components/t&c-en"
import TermsAndConditionsIT from "@/components/t&c-it"
import TermsAndConditionsES from "@/components/t&c-es"
import LegalShell from "@/components/legal-shell"
import { buildMetadata } from "@/lib/seo"
import { normalizeLang } from "@/lib/i18n"
import type { Metadata } from "next"

const meta = {
    it: {
        title: "Termini e condizioni — Trainody",
        description: "I termini e le condizioni d'uso della piattaforma Trainody.",
    },
    en: {
        title: "Terms & Conditions — Trainody",
        description: "The terms and conditions for using the Trainody platform.",
    },
    es: {
        title: "Términos y condiciones — Trainody",
        description: "Los términos y condiciones de uso de la plataforma Trainody.",
    },
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang: rawLang } = await params
    const lang = normalizeLang(rawLang)
    return buildMetadata({
        lang,
        path: "/terms-and-conditions",
        title: meta[lang].title,
        description: meta[lang].description,
    })
}

export default async function TermsCondition({
    params
}: {
  params: Promise<{ lang: string }>
}) {
    const { lang: rawLang } = await params
    const lang = normalizeLang(rawLang)
    const content = {
        it: <TermsAndConditionsIT />,
        en: <TermsAndConditionsEN />,
        es: <TermsAndConditionsES />,
    }

    return(
        <LegalShell lang={lang}>
            {content[lang]}
        </LegalShell>
    )
}
