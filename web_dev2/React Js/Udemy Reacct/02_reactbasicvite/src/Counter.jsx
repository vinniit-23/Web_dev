import { useState } from "react";   
import "./App.css";


function Counter() {
    const [num, setCounter] = useState(0)
    const Counter = () => {
        setCounter(num+1)
    }
    return (
        <>
            <h1>Set Counter Component Or Function By Vinit</h1>
            <button onClick={Counter}>Click me</button>
            <h2>Counter {num}</h2>
            
        </>
    )
}

export default Counter;