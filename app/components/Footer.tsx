import Link from "next/link";
import LogoIcon from "./icon/LogoIcon";
import LinkedinSquareIcon from "./icon/LinkedinSquareIcon";
import GitIcon from "./icon/GitIcon";
import WhatsAppIcon from "./icon/WhatsAppIcon";
import InstagramIcon from "./icon/InstagramIcon";

export default function Footer() {
    return (
        <div className="footer">
            <span className="logo">
                <LogoIcon className="md:h-16 md:w-16" />
            </span>
            <div>
                <ul className="flex flex-col">
                    <li className="text-black-50"><Link className="hover:text-cyan" href="/">Home</Link></li>
                    <li className="text-black-50"><Link className="hover:text-yellow" href="/sobre-mim">Sobre</Link></li>
                    <li className="text-black-50"><Link className="hover:text-cyan" href="/projetos">Projetos</Link></li>
                    <li className="text-black-50"><Link className="hover:text-pink" href="/contatos">Contatos</Link></li>
                </ul>
                <div className="divider"></div>
                <ul className="flex flex-col">
                    <li className="flex gap-2">
                        <a href="">
                            <LinkedinSquareIcon className="h-6 w-6 fill-black-50" />
                            <p>linkedin.com/in/vitorhadano</p>
                        </a>
                    </li>
                    <li className="flex gap-2">
                        <a href="">
                            <GitIcon className="h-6 w-6 fill-black-50" />
                            <p>github.com/vt-hadano</p>
                        </a>
                    </li>
                    <li className="flex gap-2">
                        <a href="">
                            <WhatsAppIcon className="h-6 w-6 fill-black-50" />
                            <p>(11) 9 5925-0795</p>
                        </a>
                    </li>
                    <li className="flex gap-2">
                        <a href="">
                            <InstagramIcon className="h-6 w-6 fill-black-50" />
                            <p>@vt_hadano</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}