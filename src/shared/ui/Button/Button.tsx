import React, {ButtonHTMLAttributes} from "react";
import {classNames} from "shared/lib";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children: React.ReactNode;
    theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
    const { className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}
                {...otherProps}
        >
            {children}
        </button>
    );
};
