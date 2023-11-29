import React from "react";
import LogoIcon from "../icon/LogoIcon";
import styles from "./LoadingIcon.module.css";

const LoadingIcon: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className={" relative z-50 w-20 h-20 shadow-lg rounded-full bg-white-100 flex items-center justify-center"}>
                <div className="relative w-0 h-0"><span className={styles.dot4 + " h-1 w-1 relative block rounded-full bg-purple"}></span></div>
                <div className="relative w-0 h-0"><span className={styles.dot3 + " h-1 w-1 relative block rounded-full bg-pink"}></span></div>
                <div className="relative w-0 h-0"><span className={styles.dot2 + " h-1 w-1 relative block rounded-full bg-yellow"}></span></div>
                <div className="relative w-0 h-0"><span className={styles.dot1 + " h-1 w-1 relative block rounded-full bg-cyan"}></span></div>
                <LogoIcon className="w-12 h-12 fill-black-100" />
            </div>
        </div>
    )
}

export default LoadingIcon;