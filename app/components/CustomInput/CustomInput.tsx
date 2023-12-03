import React, { InputHTMLAttributes } from "react";
import styles from "./CustomInput.module.css";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    extraClasses: string;
}

const CustomInput: React.FC<CustomInputProps> = (inputProps) => {
    const { type, placeholder, label, name, extraClasses, ...rest } = inputProps;

    const handleInputType = () => {
        if (type === 'textarea') {
            return <textarea name={name} id={name} className={`p-2 h-full w-full rounded-xl overflow-y-auto ${extraClasses} ${styles.textarea}`} placeholder={`${placeholder}`}></textarea>;
        }
        return <input {...rest} type={type} name={name} id={name} className={`py-2 px-4 w-full rounded-xl ${extraClasses}`} placeholder={`${placeholder}`} />;
    }

    return (
        <div>
            <label htmlFor={name} className="font-medium">{label}</label>
            {handleInputType()}
        </div>
    )
}

export default CustomInput;