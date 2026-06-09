import { ChartSpline } from "lucide-react"
import Link from "next/link"

const Banner = ({
    lang
}: {
    lang: string
}) => {
    return(
        <div className="mx-auto py-4 w-full">
            <div className="bg-primary py-24 flex items-center justify-center">
                <div className="flex flex-col items-center gap-y-8">
                    {/*<div className="w-10 h-10 bg-white"></div>*/}
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <h3 className="text-sm uppercase tracking-wider text-[#0F0F0F]/70 font-medium text-center">{lang == 'it' ? 'Pronto a rivoluzionare il tuo modo di allenare?' : 'Are you ready to revolutionize your way of training?'}</h3>
                        <p className="font-display text-3xl uppercase lg:text-5xl text-[#0F0F0F] text-center max-w-2xl tracking-tight">{lang == 'it' ? 'Inizia subito la tua prova gratuita' : 'Start your free trial now'}</p>
                    </div>
                    

                    <Link
                        href={`https://app.trainody.com/${lang}/sign-up`} 
                        id="cta" className="px-14 py-4 gap-x-2 cursor-pointer bg-[#0F0F0F] text-white rounded-lg flex items-center justify-center font-display text-sm uppercase tracking-wide transition-transform hover:scale-[1.03]">
                        <span>{lang == 'it' ? 'Inizia' : 'Join'}</span>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Banner