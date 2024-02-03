import {useState} from "react";
import './counter.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => ++prev)}>Increment</button>
        </div>
    );
};
