import React from "react";
import styles from "./GradientBg.module.css";

const GradientBg: React.FC = () => {
    return (
        <div className=" relative w-screen overflow-hidden h-screen bg-white-100">
            <div className={styles.g1 + " z-1 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-cyan"}></div>
            <div className={styles.g2 + " z-1 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-pink"}></div>
            <div className={styles.g3 + " z-1 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-yellow"}></div>
            <div className={styles.g4 + " z-1 blur-[200px] absolute h-[40rem] w-[40rem] rounded-full bg-purple"}></div>
        </div>
    );
};

export default GradientBg;