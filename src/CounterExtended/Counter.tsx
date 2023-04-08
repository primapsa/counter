import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";
import {validateHeaderName} from "http";
type CounterPropsType = {
    counter: number
    increment: () => void
    reset: () => void
    error: initError
}
type initError = {
    [key: string]: string
}
const Counter = ({counter,increment, reset, error}: CounterPropsType) => {
   const monitorStyle = Object.values(error).filter(e => !!e).length ? `${s.monitor} ${s.error}` : `${s.monitor}`

  const monitorError = Object.entries(error).find(([init, value]) => init!=='limit' && value!=='' )?.[1]

    return (
        <div className={s.counter}>
            <div className={monitorStyle}>
                { monitorError || counter}
                <p></p>
            </div>
            <div className={s.buttonsContainer}>
              <Button name={'add'} callback={increment} disabled={false}/>
              <Button name={'reset'} callback={reset} disabled={false}/>
            </div>

        </div>
    );
};

export default Counter;