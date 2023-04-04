import React, {useState} from 'react';
import Counter from "./Counter";
import CounterInit from "./CounterInit";
import styles from './Counter.module.css'

const CounterExtended = () => {
    const [counter, setCounter] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [stopValue, setStopValue] = useState(0)
    const [error, setError] = useState('')

    return (
        <div className={styles.wrapper}>
            <Counter/>
            <CounterInit/>
        </div>
    );
};

export default CounterExtended;