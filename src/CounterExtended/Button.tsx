import React from 'react';
import button from "../Button";
import s from './Counter.module.css'
type ButtonPropsType = {
    name: string
    callback: () => void
}
const Button = ({name, callback}: ButtonPropsType) => {
    return (
       <button className={s.button} onClick={callback}>{name}</button>
    );
};

export default Button;