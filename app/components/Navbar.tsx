import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <span className="nav-logo"><Link href={"/"}>Logo</Link></span>
            <div className="nav-list-container">
                <ul className="nav-list">
                    <li className="nav-link"><Link href={"/"}>Home</Link></li>
                    <li className="nav-link"><Link href={"/sobre-mim"}>Sobre Mim</Link></li>
                    <li className="nav-link"><Link href={"/projetos"}>Projetos</Link></li>
                    <li className="nav-link"><Link href={"/contatos"}>Contatos</Link></li>
                </ul>
                <div className="nav-v-divider"></div>
                <ul className="nav-socials">
                    <li className="nav-link"><a href="" className="nav-social-logo">instagram</a></li>
                    <li className="nav-link"><a href="" className="nav-social-logo">linkedin</a></li>
                </ul>
            </div>
        </nav>
    )
}