import React from 'react';
import style from './Button.module.scss'

export const Button =
    ({
         nameButton,
         onClick,
         variant,
         ...restProps
     }) => {
        return (
            <div>
                <button
                    onClick={onClick}
                    className={`${style[variant]}`}
                    {...restProps}
                >{nameButton}</button>
            </div>
        );
    };
