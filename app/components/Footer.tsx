import Link from "next/link";
import LogoIcon from "./icon/LogoIcon";
import LinkedinSquareIcon from "./icon/LinkedinSquareIcon";
import GitIcon from "./icon/GitIcon";
import WhatsAppIcon from "./icon/WhatsAppIcon";
import InstagramIcon from "./icon/InstagramIcon";

export default function Footer() {
    return (
        <div className="z-50 w-full relative footer flex justify-between bg-white-100 shadow-[0_-4px_16px_rgb(0,0,0,0.25)] md:px-40 px-16 py-8">
            <span className="logo">
                <Link href="/">
                <LogoIcon className="md:h-16 md:w-16 h-8 w-8 fill-black-100 hover:fill-cyan transition-all" />
                </Link>
            </span>
            <div className="flex gap-4 text-right">
                <ul className="flex flex-col gap-4">
                    <li className="text-black-50"><Link className="hover:text-cyan transition-all" href="/">Home</Link></li>
                    <li className="text-black-50"><Link className="hover:text-yellow transition-all" href="/sobre-mim">Sobre</Link></li>
                    <li className="text-black-50"><Link className="hover:text-cyan transition-all" href="/projetos">Projetos</Link></li>
                    <li className="text-black-50"><Link className="hover:text-pink transition-all" href="/contatos">Contatos</Link></li>
                </ul>
                <div className="divider h-full w-0.5 bg-black-50 rounded-full"></div>
                <ul className="flex flex-col gap-4">
                    <li>
                        <a href="https://www.linkedin.com/in/vitorhadano/" target="blank">
                            <LinkedinSquareIcon parentClassName="gap-2 flex" className="h-6 w-6 fill-black-50 transition-all group-hover:fill-cyan ">
                            <p className="md:block hidden group-hover:text-cyan">linkedin.com/in/vitorhadano</p>
                            </LinkedinSquareIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/vt-hadano" target="blank">
                            <GitIcon parentClassName="gap-2 flex" className="h-6 w-6 fill-black-50 transition-all group-hover:fill-yellow ">
                            <p className="md:block hidden group-hover:text-yellow">github.com/vt-hadano</p>
                            </GitIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+5511959250795" target="blank">
                            <WhatsAppIcon parentClassName="gap-2 flex" className="h-6 w-6 fill-black-50 transition-all group-hover:fill-cyan">
                            <p className="md:block hidden group-hover:text-cyan">(11) 9 5925-0795</p>
                            </WhatsAppIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/vt_hadano/" target="blank">
                            <InstagramIcon parentClassName="gap-2 flex" className="h-6 w-6 fill-black-50 transition-all group-hover:fill-pink">
                            <p className="md:block hidden group-hover:text-pink">@vt_hadano</p>
                            </InstagramIcon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}