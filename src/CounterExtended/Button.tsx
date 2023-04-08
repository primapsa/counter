import React from 'react';
import button from "../Button";
import s from './Counter.module.css'
type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}
const Button = ({name, callback, disabled}: ButtonPropsType) => {
    return (
       <button className={s.button} onClick={callback} disabled={disabled}>{name}</button>
    );
};

export default Button;