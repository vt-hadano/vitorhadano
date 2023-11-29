import React, {ReactNode} from "react";

interface SectionTitleProps {
    children? : ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({children}) => {
    return (
        <div className="flex gap-4">
            <div className="h-1 w-full bg-black-12 rounded-full"></div>
            <h1 className="text-semibold text-black-100">
                {children}
            </h1>
            <div className="h-1 w-full bg-black-12 rounded-full"></div>
        </div>
    );
}

export default SectionTitle;