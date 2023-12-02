'use client'

import React, { useState, ReactNode, useEffect, DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./CardTechnology.module.css"

interface CardTechnologyProps {
    color: string;
    tecName: string;
    tecDescription: string;
    children: ReactNode;
    position: string;
    onClick: any;
}

const CardTechnology: React.FC<CardTechnologyProps> = (props) => {

    const { color, tecName, tecDescription, children, position, onClick } = props;

    const [cardClasses, setCardClasses] = useState('');
    const [currentPosition, setCurrentPosition] = useState(position);

    useEffect(() => {
        setCurrentPosition(getPosition(position));
        setCardClasses((position ==='position1') ? `${styles.active}` : `${styles.inactive}`);
    }, [ position])

    const getBallClassName = () => {
        switch (color) {
            case 'cyan':
                return styles.cyanBall;
            case 'yellow':
                return styles.yellowBall;
            case 'pink':
                return styles.pinkBall;
            case 'purple':
                return styles.purpleBall;
            case 'black':
                return styles.blackBall;
            default:
                return styles.grayBall;
        }
    }

    const getPosition = (position: string) => {
        switch (position) {
            case 'position1':
                return styles.position1;
            case 'position2':
                return styles.position2;
            case 'position3':
                return styles.position3;
            case 'position4':
                return styles.position4;
            case 'position5':
                return styles.position5;
            default:
                return '';
        }
    }

    return (
        <div className={`${currentPosition} ${styles.tecCard}`}>
            <div className={`absolute flex flex-col-reverse items-center justify-center ${styles.innerCard}`}>
                <div className={`flex flex-col items-center justify-start bg-black-100/10 rounded-2xl gap-2 backdrop-blur-xl  overflow-hidden ${styles.cardContent} ` + cardClasses}>
                    <h3 className="font-medium text-md text-center">{tecName}</h3>
                    <div className="bg-black-50 rounded-full w-full"></div>
                    <p>{tecDescription}</p>
                </div>
                <div className="flex items-center justify-center w-0 h-0">
                    <div className={`relative cursor-pointer  p-3 block rounded-full flex items-center justify-center drop-shadow-lg ${getBallClassName()}`}
                    onClick={onClick}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardTechnology;