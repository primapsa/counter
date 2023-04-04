import React, {useState} from 'react';
import style from './Counter.module.css'
import CounterView from "./CounterView";
import Button from "./Button";

const Counter = () => {
    const LIMIT = 5;
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        if(count >= LIMIT) return;
        setCount(count + 1);
    }
    const resetCounter = () => {
        setCount(0);
    }
    return (
        <div className={style.wrapper}>
            <CounterView counterValue={count} limit={LIMIT}/>
            <div className={style.controls}>
                <Button name={'inc'} isDisabled={count >= LIMIT} callback={incrementCount}/>
                <Button name={'reset'} isDisabled={!count} callback={resetCounter}/>
            </div>
        </div>
    )

}
export default Counter;
