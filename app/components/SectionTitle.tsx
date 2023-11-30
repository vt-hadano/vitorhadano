import React, {ReactNode} from "react";

interface SectionTitleProps {
    children? : ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({children}) => {
    return (
        <div className="flex gap-4 items-center justify-center md:px-40 px-16">
            <div className="h-1 w-full bg-black-12 rounded-full"></div>
            <h1 className="md:text-5xl text-2xl md:text-right text-center font-medium text-black-100">
                {children}
            </h1>
            <div className="h-1 w-full bg-black-12 rounded-full"></div>
        </div>
    );
}

export default SectionTitle;