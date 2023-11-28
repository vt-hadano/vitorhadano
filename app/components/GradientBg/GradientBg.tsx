import React, {ReactNode} from "react";
import styles from "./GradientBg.module.css";

interface GradientBgProps {
    children? : ReactNode;
}

const GradientBg: React.FC<GradientBgProps> = ({children}) => {
    return (
        <div className=" relative w-screen overflow-hidden h-screen bg-white-100">
            {children}
            <div className={styles.g1 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-cyan"}></div>
            <div className={styles.g2 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-pink"}></div>
            <div className={styles.g3 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-yellow"}></div>
            <div className={styles.g4 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-purple"}></div>
        </div>
    );
};

export default GradientBg;