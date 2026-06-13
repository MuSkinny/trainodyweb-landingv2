import Link from "next/link"
import type { Lang } from "@/lib/i18n"

const copy: Record<Lang, { eyebrow: string; title: string; cta: string }> = {
    it: {
        eyebrow: "Pronto a rivoluzionare il tuo modo di allenare?",
        title: "Inizia subito la tua prova gratuita",
        cta: "Inizia",
    },
    en: {
        eyebrow: "Are you ready to revolutionize your way of training?",
        title: "Start your free trial now",
        cta: "Join",
    },
    es: {
        eyebrow: "¿Listo para revolucionar tu forma de entrenar?",
        title: "Empieza ahora tu prueba gratuita",
        cta: "Empieza",
    },
}

const Banner = ({
    lang
}: {
    lang: Lang
}) => {
    const t = copy[lang]

    return(
        <div className="mx-auto py-4 w-full">
            <div className="bg-primary py-24 flex items-center justify-center">
                <div className="flex flex-col items-center gap-y-8">
                    {/*<div className="w-10 h-10 bg-white"></div>*/}
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <h3 className="text-sm uppercase tracking-wider text-[#0F0F0F]/70 font-medium text-center">{t.eyebrow}</h3>
                        <p className="font-display text-3xl uppercase lg:text-5xl text-[#0F0F0F] text-center max-w-2xl tracking-tight">{t.title}</p>
                    </div>


                    <Link
                        href={`https://app.trainody.com/${lang}/sign-up`}
                        id="cta" className="px-14 py-4 gap-x-2 cursor-pointer bg-[#0F0F0F] text-white rounded-lg flex items-center justify-center font-display text-sm uppercase tracking-wide transition-transform hover:scale-[1.03]">
                        <span>{t.cta}</span>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Banner
