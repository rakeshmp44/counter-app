import { useState } from "react";
import Negative from "./Negative";

function Counter() {

    const [count, setCount] = useState(0);
    const [countpositive, setCountPositive] = useState(false);

    const increase = () => {
        setCount(count + 1);
        if (count !== 0) {
            setCountPositive(true);
        } 
        
    
    }

    const decrease = () => {
        if (count < 0) {
            return;
        } else {
            setCount(count - 1);
        }
    }
    return (
        <>
            <h1>Savage Counter App</h1>
            <p>do not decrement counter value less than 0!!!!!</p>
            <h2>counter value: {count}</h2>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            {countpositive && <p>well done!! u have a positive mind.</p>}
            {count < 0 && <Negative />}
        </>
    )
}

export default Counter;