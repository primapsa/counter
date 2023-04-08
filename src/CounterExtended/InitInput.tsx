import React, {ChangeEvent} from 'react';
import s from './Counter.module.css'
import {InitError, InitType} from "./CounterExtended";
type InitInputPropsType = {
    init: InitType
    value: number
    callback: (id: InitType, v: string) => void
    error: InitError
}
type initError = {
    type: string
    message: string
}
const InitInput = ({init, value, callback, error}:InitInputPropsType) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        callback(init, e.target.value)
    }
    const errorClass = error[init] ? s.inputError : ''
    return (
        <input type="number"  value={value} onChange={onChangeCallback} className={errorClass}/>
    );
};

export default InitInput;