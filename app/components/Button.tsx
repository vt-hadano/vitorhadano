import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  let buttonClasses = '';

  return (
    <button className={`${buttonClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;