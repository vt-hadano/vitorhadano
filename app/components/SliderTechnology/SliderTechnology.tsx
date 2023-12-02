'use client'

import React, { ReactNode, useRef, useState } from "react";
import styles from "./SliderTechnology.module.css";

import CardTechnology from "../CardTechnology/CardTechnology";
import NextArrow from "../icon/NextArrow";
import PrevArrow from "../icon/PrevArrow";
import NextIcon from "../icon/NextIcon";
import TailwindIcon from "../icon/TailwindIcon";
import WordpressIcon from "../icon/WordpressIcon";
import MysqlIcon from "../icon/MysqlIcon";
import BlenderIcon from "../icon/BlenderIcon";


const tecCards = [
    {
        key: 0,
        color: 'black',
        tecName: 'Next.js',
        tecDescription: 'Next.js é uma ferramenta que ajuda a construir sites incríveis. Imagine como um conjunto de ferramentas que tornam a criação de páginas da web bonitas e rápidas muito mais fácil.',
        children: <NextIcon parentClassName={""} className="fill-white-100 h-10 w-10" />
    },
    {
        key: 1,
        color: 'purple',
        tecName: 'Tailwind CSS',
        tecDescription: 'Tailwind CSS é como uma caixa de ferramentas mágica para estilizar sites. Ele oferece atalhos especiais para tornar as coisas bonitas sem precisar escrever muitos códigos complicados.',
        children: <TailwindIcon parentClassName={""} className="fill-white-100 h-10 w-10" />
    },
    {
        key: 2,
        color: 'cyan',
        tecName: 'WordPress',
        tecDescription: 'WordPress é como uma plataforma de criação de sites super fácil. Com ele, você pode fazer blogs, sites ou até lojas online sem precisar ser um expert em programação.',
        children: <WordpressIcon parentClassName={""} className="fill-white-100 h-10 w-10" />
    },
    {
        key: 3,
        color: 'yellow',
        tecName: 'MySQL',
        tecDescription: ' MySQL é como um armazém para guardar informações importantes. É onde os sites guardam dados, como nomes de usuários e mensagens, para que tudo funcione direitinho.',
        children: <MysqlIcon parentClassName={""} className="fill-black-100 h-10 w-10" />
    },
    {
        key: 4,
        color: 'pink',
        tecName: 'Blender',
        tecDescription: 'Blender é um programa de computador que ajuda a criar coisas legais em 3D, como animações ou até mesmo personagens para jogos. É como uma varinha mágica para fazer objetos virtuais ganharem vida.',
        children: <BlenderIcon parentClassName={""} className="fill-white-100 h-10 w-10" />
    }
]

const SliderTechnology: React.FC = () => {
    const [positionsList, setPositionsList] = useState(['position1', 'position2', 'position3', 'position4', 'position5']);
    const positions = ['position1', 'position2', 'position3', 'position4', 'position5'];

    const moveNext = () => {
        let offset = positionsList.indexOf('position1') + 1;
        if (offset > 4) offset -= positions.length;
        selectCard(offset);
    }

    const movePrev = () => {
        let offset = positionsList.indexOf('position1') - 1;
        if (offset < 0) offset += positions.length;
        selectCard(offset);
    }

    const selectCard = (index: number) => {
        const newPositionsList = [...positionsList];
        
        let offset = 0;

        for (let i = 0; i < positionsList.length; i++) {
            offset = i - index;
            if (offset < 0) offset += positions.length;
            newPositionsList[i] = positions[offset];
        }
        setPositionsList(newPositionsList);
    }
    return (
        <div className={`w-full px-16 m-auto relative flex ${styles.sliderContainer}`}>
            <div className={`m-[50px] ${styles.sliderCards}`}>
                {tecCards.map(card => (
                    <CardTechnology
                        key={card.key}
                        color={card.color}
                        tecName={card.tecName}
                        tecDescription={card.tecDescription}
                        position={positionsList[card.key]}
                        onClick={() => selectCard(card.key)}>
                        {card.children}
                    </CardTechnology>
                ))}
            </div>
            <div>
                <button onClick={movePrev} className={`bg-transparent md:block hidden flex items-center h-full w-20 ${styles.sliderNav} ${styles.prev}`}><PrevArrow className="w-16 bg-transparent fill-black-25 hover:fill-pink" parentClassName={""} /></button>

                <button onClick={moveNext} className={`bg-transparent md:block hidden flex items-center h-full w-20 ${styles.sliderNav} ${styles.next}`}><NextArrow className="w-[58px] h-[111px] bg-transparent fill-black-25 hover:fill-pink" parentClassName={""} /></button>
            </div>
        </div>
    );
}

export default SliderTechnology;