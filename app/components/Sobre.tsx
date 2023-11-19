import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
    return (
        <div className="flex md:flex-row flex-col-reverse justify-between md:px-40 px-20 items-center gap-8">
            <div>
                <Image
                    src="/img-13.png" alt={"Avatar de Vitor Hadano Sorrindo"}
                    width={726}
                    height={775}
                    className="md:w-[46rem] w-[21rem]"
                />
            </div>
            <div className="flex flex-col md:w-1/3 w-full md:gap-8 gap-4 md:items-end items-center">
                <h3 className="md:text-5xl text-2xl md:text-right text-center font-medium">
                    Sobre Mim
                </h3>
                <p className="md:text-3xl text-justify">
                    Sou um Web Developer formado em Análise e Desenvolvimento de Sistemas (ADS) especializado na produção, manutenção e customização de sites, como: landing pages, e-comerce, blogs e etc. <br /><br />

                    Meu objetivo é sempre produzir a melhor aplicação utilizando de tecnologias de ponta, mantendo o baixo custo sem a necessidade de comprometer a beleza, funcionalidade ou experiência do seu site.
                </p>
                <Link href={"/sobre-mim"}><span className="text-pink hover:text-yellow md:text-xl font-medium text-sm transition-all">saiba mais +</span></Link>
            </div>
        </div>
    );
}
