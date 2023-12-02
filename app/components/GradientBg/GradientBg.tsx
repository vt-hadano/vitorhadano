import React, { ReactNode } from "react";
import styles from "./GradientBg.module.css";

interface GradientBgProps {
    extraClass?: string;
    children?: ReactNode;
}

const GradientBg: React.FC<GradientBgProps> = ({ children, extraClass }) => {
    return (
        <div className={`relative w-full overflow-hidden h-full bg-white-100 flex items-center justify-center ${extraClass} ${styles.maskFix}`}>
            {children}
            <div className="h-0 w-0">
                <div className={styles.g1 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] block rounded-full bg-cyan"}></div>
                <div className={styles.g2 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] block rounded-full bg-pink"}></div>
                <div className={styles.g3 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] block rounded-full bg-yellow"}></div>
                <div className={styles.g4 + " z-0 blur-[200px] absolute h-[40rem] w-[40rem] block rounded-full bg-purple"}></div>
            </div>
        </div>
    );
};

export default GradientBg;