import * as React from 'react';

interface IButtonProps {
    type: "light" | "dark";
    tailwindClasses?: string
    children:React.ReactNode
}

const Button: React.FunctionComponent<IButtonProps> = ({ type = "light", children, tailwindClasses = '' }) => {
    let buttonClass = '';
    switch (type) {
        case 'light':
            buttonClass = 'bg-background-light text-gray-300';
            break;
        case 'dark':
            buttonClass = 'bg-background-dark text-gray-300';
            break;
        default:
            buttonClass = '';
            break;
    }

    return (
        <button className={`${buttonClass} ${tailwindClasses}`}>
            {children}
        </button>
    );
};

export default Button;
