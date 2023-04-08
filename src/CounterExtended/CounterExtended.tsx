import React, {useEffect, useState} from 'react';
import Counter from "./Counter";
import CounterInit from "./CounterInit";
import styles from './Counter.module.css'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const INITIAL_COUNTER = 0;
const INITIAL_ERROR = ''
// type StoreType = {
//     counter: number
//     start: number
//     stop: number
//     error: initError
// }
type StoreType = typeof state
const state = {
    counter: 0,
    start: 0,
    stop: 4,
    error: {
        start: '',
        stop: '',
        limit: ''
    },
    set: true
}
export type InitError = {
    start: string
    stop: string
    limit: string
}
export type InitType = 'start' | 'stop' | 'limit'
const CounterExtended = () => {

    const [store, setStore] = useState<StoreType>(state)


    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('counter') as string)
        setStore({...store, start: storage.start, stop: storage.stop})
    },[])

    const incrementCounter = () => {

        const count = store.counter + 1 > store.stop ? store.counter : store.counter + 1;
        const err = count >= store.stop ? 'error' : ''
        setStore({...store, counter: count, error: {...store.error, limit: err}})
    }

    const resetCounter = () => {
        setStore({...store, counter: store.start, error: {...store.error, limit: ''}})
    }

    const setCounterInit = () => {


        setStore({...store, counter: store.start})
        localStorage.setItem('counter', JSON.stringify({start: store.start, stop: store.stop}))
    }

    const initialCallback = (initKey: InitType, value: string) => {

        const number = parseInt(value)
        const copy = {...store, [initKey]: number}
        let error = (number < 0) ? 'invalid number' : copy.start >= copy.stop ? 'invalid range' : ''
        setStore({...store, [initKey]: number, error: {...store.error, [initKey]: error}})
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={() => {
                console.log(store)
            }}>+
            </button>
            <CounterInit
                start={store.start}
                stop={store.stop}
                setCallback={setCounterInit}
                initialCallback={initialCallback}
                error={store.error}

            />
            <Counter counter={store.counter}
                     error={store.error}
                     increment={incrementCounter}
                     reset={resetCounter}
            />
        </div>
    );
};

export default CounterExtended;