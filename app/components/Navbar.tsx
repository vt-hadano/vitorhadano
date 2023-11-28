"use client"

import Link from "next/link";
import LogoIcon from "./icon/LogoIcon";
import InstagramIcon from "./icon/InstagramIcon";
import LinkedinIcon from "./icon/LinkedinIcon";
import { useState } from "react";

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    }
    return (
        <nav className="w-full h-auto drop-shadow-lg fixed bg-white-100 z-50">
            <div className="flex justify-between items-center md:px-16 px-8 py-2 text-black-50 text-2xl w-full">
                <span className="nav-logo"><Link href={"/"}><LogoIcon className=" md:h-16 md:w-16 h-8 w-8 fill-black-100 hover:fill-cyan transition-all" /></Link></span>
                <ul className="nav-list md:flex gap-8 items-center hidden">
                    <li className="nav-link transition-colors hover:text-pink"><Link href={"/"}>Home</Link></li>
                    <li className="nav-link transition-colors hover:text-yellow"><Link href={"/sobre-mim"}>Sobre</Link></li>
                    <li className="nav-link transition-colors hover:text-cyan"><Link href={"/projetos"}>Projetos</Link></li>
                    <li className="nav-link transition-colors hover:text-pink"><Link href={"/contatos"}>Contatos</Link></li>
                    <li className="nav-divider w-0.5 h-5 bg-black-50 rounded-full"></li>
                    <li className="nav-link transition-colors hover:fill-pink"><a href="https://www.instagram.com/vt_hadano/" target="blank" className="nav-social-logo"><InstagramIcon parentClassName="" className="h-5 w-5 fill-black-50 hover:fill-pink transition-all" /></a></li>
                    <li className="nav-link transition-colors hover:fill-cyan"><a href="https://www.linkedin.com/in/vitorhadano/" target="blank" className="nav-social-logo"><LinkedinIcon parentClassName="" className="h-6git  w-5 fill-black-50 hover:fill-cyan transition-all" /></a></li>
                </ul>
                <div className="md:hidden flex items-center">
                    <button
                        className="text-black-50 inline-flex items-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-12"
                        onClick={toggleNavbar}>
                        {isClick ? (
                            <svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden w-full items ">
                    <ul className="nav-list flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 justify-center items-center gap-8">
                        <li className="nav-link transition-colors hover:text-pink"><Link href={"/"}>Home</Link></li>
                        <li className="nav-link transition-colors hover:text-yellow"><Link href={"/sobre-mim"}>Sobre</Link></li>
                        <li className="nav-link transition-colors hover:text-cyan"><Link href={"/projetos"}>Projetos</Link></li>
                        <li className="nav-link transition-colors hover:text-pink"><Link href={"/contatos"}>Contatos</Link></li>
                        <li className="nav-divider w-1/2 h-0.5 bg-black-50 rounded-full"></li>
                        <li className="nav-link flex gap-16 w-full justify-center">
                            <a href="https://www.instagram.com/vt_hadano/" target="blank" className="nav-social-logo">
                                <InstagramIcon parentClassName="" className="h-5 w-5 fill-black-50 hover:fill-pink transition-all" />
                            </a>
                            <a href="https://www.linkedin.com/in/vitorhadano/" target="blank" className="nav-social-logo">
                                <LinkedinIcon parentClassName="" className="h-6git  w-5 fill-black-50 hover:fill-cyan transition-all" />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}