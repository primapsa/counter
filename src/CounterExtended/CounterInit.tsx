import React, {ChangeEvent} from 'react';
import s from "./Counter.module.css";
import Button from "./Button";
import InitInput from "./InitInput";
import {InitError, InitType} from "./CounterExtended";
type CounterInitPropsType = {
    start: number
    stop: number
    setCallback: () => void
    initialCallback: (i: InitType, v: string) => void
    error: InitError

}

const CounterInit = ({start,stop,error, setCallback, initialCallback}:CounterInitPropsType) => {
    const isSettable = localStorage.getItem('counter') === JSON.stringify({start: start, stop: stop})
    console.log(isSettable)
    return (
        <div className={s.counter}>
            <div className={s.monitor}>
                <div className={s.monitorColumn}>
                    <p>start</p>
                   <InitInput init={'start'} value={start} callback={initialCallback} error={error} />
                    <p>end</p>
                   <InitInput init={'stop'} value={stop} callback={initialCallback} error={error} />
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={'set'} callback={setCallback} disabled={isSettable}/>
            </div>

        </div>
    );
}
export default CounterInit;