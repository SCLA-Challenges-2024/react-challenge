import React, { useState } from "react";
import './Counter.css';

export default function Counter() {
    const [number, setNumber] = useState(0);

    const incrementNumber = () => {
        setNumber(number => number + 1);
    }

    const decrementNumber = () => {
        setNumber(number => number - 1);
    }

    const resetNumber = () => {
        setNumber(0);
    }

    const randomizeNumber = () => {
        setNumber(Math.floor(Math.random() * (100 + 100 + 1) - 100));
    }

    return (
        <div className="container">
            <div>{number}</div>
            <button onClick={incrementNumber}>Increment</button>
            <button onClick={decrementNumber}>Decrement</button>
            <button onClick={resetNumber}>Reset</button>
            <button onClick={randomizeNumber}>Randomize Number</button>
        </div>
    )
}