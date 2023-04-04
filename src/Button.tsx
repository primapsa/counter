import React, {useState} from 'react';
import style from './Counter.module.css'
import CounterView from "./CounterView";
import {ButtonPropsType} from "./types";

const Button = (props: ButtonPropsType) => {

  return (
      <button onClick={props.callback} disabled={props.isDisabled}>{props.name}</button>
  )

}
export default Button;
