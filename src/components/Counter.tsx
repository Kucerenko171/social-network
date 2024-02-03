import {useState} from "react";
import classes from './counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div className={classes.container}>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => ++prev)}>Increment</button>
        </div>
    );
};
