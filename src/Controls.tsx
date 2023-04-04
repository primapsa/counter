import React from 'react';
import style from './Counter.module.css'
import Button from "./Button";
import {ButtonPropsType} from "./types";

const Controls = (props: ButtonPropsType) => {

    return (
        <div className={style.controls}>
            <Button name={props.name} callback={props.callback} isDisabled={props.isDisabled}/>
            <Button name={props.name} callback={props.callback} isDisabled={props.isDisabled}/>
        </div>

    )

}
export default Controls;
