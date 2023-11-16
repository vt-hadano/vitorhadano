import Link from "next/link";
import LogoIcon from "./icon/LogoIcon";
import InstagramIcon from "./icon/InstagramIcon";
import LinkedinIcon from "./icon/LinkedinIcon";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-16 py-2 bg-white-100 text-black-50 text-2xl drop-shadow-lg fixed w-full">
            <span className="nav-logo"><Link href={"/"}><LogoIcon className=" h-16 w-16 fill-black-100 hover:fill-cyan transition-all"/></Link></span>
            <ul className="nav-list flex flex gap-8 items-center">
                <li className="nav-link transition-colors hover:text-pink"><Link href={"/"}>Home</Link></li>
                <li className="nav-link transition-colors hover:text-yellow"><Link href={"/sobre-mim"}>Sobre Mim</Link></li>
                <li className="nav-link transition-colors hover:text-cyan"><Link href={"/projetos"}>Projetos</Link></li>
                <li className="nav-link transition-colors hover:text-pink"><Link href={"/contatos"}>Contatos</Link></li>
                <li className="nav-divider w-0.5 h-5 bg-black-50 rounded-full"></li>
                <li className="nav-link transition-colors hover:fill-pink"><a href="" className="nav-social-logo"><InstagramIcon className="h-5 w-5 fill-black-50 hover:fill-pink transition-all"/></a></li>
                <li className="nav-link transition-colors hover:fill-cyan"><a href="" className="nav-social-logo"><LinkedinIcon className="h-6git  w-5 fill-black-50 hover:fill-cyan transition-all"/></a></li>
            </ul>
        </nav>
    )
}