import React from "react";
import styles from './UnderConstruction.module.css'
import Image from "next/image";
import Button from "../Button";

const UnderConstruction: React.FC = () => {
    return (
        <div className={styles.underConstruction + " absolute flex w-auto h-auto flex-col items-center justify-center"}>
                <Image src={"/img-15.png"} alt={"Cone e capacete de construção"} width={200} height={100} className="relative top-2"></Image>
            <div className="z-4 md:text-base text-sm w-auto h-auto rounded-full bg-white-100 py-4 px-8 font-bold text-black-100 shadow-xl md:tracking-[0.2em]">
                <p><span className="font-montserrat">E</span>M CONSTRUÇÃO</p>
            </div>

            <a href="/">
                <Button className={styles.retornar + " relative drop-shadow-lg py-1  px-2 w-full bg-white-25 rounded-full text-xs text-white-100 hover:bg-white-12 transition-all focus:bg-white-100 focus:border-1 focus:border-black-100 focus:text-black-100"}>voltar para o início</Button>
            </a>
        </div>
    );
}

export default UnderConstruction;