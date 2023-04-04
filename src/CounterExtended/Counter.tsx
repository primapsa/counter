import React from 'react';
import styles from './Counter.module.css'
type CounterPropsType = {
    counter: number
    startValue: number
    stopValue: number
    error: string
}
const Counter = ({counter,startValue, stopValue, error}: CounterPropsType) => {
    return (
        <div className={styles.counter}>
            <div className={styles.monitor}>

            </div>
            <div className={styles.buttonsContainer}>
                <button></button>
                <button></button>
            </div>

        </div>
    );
};

export default Counter;