import React, {useState} from 'react';
import style from './Counter.module.css'
import {CounterViewPropsType} from "./types";

const CounterView = (props: CounterViewPropsType) => {
    const styled =
        props.counterValue === props.limit ? `${style.counterView} ${style.error}` : `${style.counterView}`
    return (
        <div className={styled}>{props.counterValue}</div>
    )

}
export default CounterView;
