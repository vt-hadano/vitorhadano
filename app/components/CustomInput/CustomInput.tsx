import React, { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hasIcon: boolean;
  }

const CustomInput : React.FC<CustomInputProps> = (inputProps) => {
    const {type, placeholder, label, hasIcon, name, ...rest} = inputProps;

    const handleIcon = () => {

    }

    const handleInputType = () => {
        if (placeholder === 'textarea') {
            return <textarea name={name} className="h-full w-full" placeholder={`${placeholderIcon} ${placeholder}`}></textarea>;
        }
        return <input {...rest} type={type} name={name} className="h-8 w-full" placeholder={`${placeholderIcon} ${placeholder}`}/>;
    }

    const placeholderIcon = hasIcon? handleIcon : '';

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {handleInputType()}
        </div>
    )
}