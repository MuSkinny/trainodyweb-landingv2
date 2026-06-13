import PrivacyPolicyEN from '@/components/privacy-policy-en'
import PrivacyPolicyIT from '@/components/privacy-policy-it'
import PrivacyPolicyES from '@/components/privacy-policy-es'
import LegalShell from '@/components/legal-shell'
import { buildMetadata } from '@/lib/seo'
import { normalizeLang } from '@/lib/i18n'
import type { Metadata } from 'next'
import React from 'react'

const meta = {
    it: {
        title: 'Privacy Policy — Trainody',
        description: 'Come Trainody raccoglie, utilizza e protegge i tuoi dati personali.',
    },
    en: {
        title: 'Privacy Policy — Trainody',
        description: 'How Trainody collects, uses and protects your personal data.',
    },
    es: {
        title: 'Política de Privacidad — Trainody',
        description: 'Cómo Trainody recopila, utiliza y protege tus datos personales.',
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
        path: '/privacy-policy',
        title: meta[lang].title,
        description: meta[lang].description,
    })
}

export default async function PrivacyPolicy({
    params
}: {
    params: Promise<{ lang: string }>
}) {

    const { lang: rawLang } = await params
    const lang = normalizeLang(rawLang)
    const content = {
        it: <PrivacyPolicyIT />,
        en: <PrivacyPolicyEN />,
        es: <PrivacyPolicyES />,
    }

    return (
        <LegalShell lang={lang}>
            {content[lang]}
        </LegalShell>
    )
}
