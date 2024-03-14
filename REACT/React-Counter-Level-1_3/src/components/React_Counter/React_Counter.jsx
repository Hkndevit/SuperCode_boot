import { useState } from "react";
import "./React_Counter.css";

const React_Counter = () => {
const [count, setCount] = useState(0);
const löschen = () => {setCount(0);}



    return (
        <section className="counter"> 
        <div className="flex-div"> 
        <button onClick={() => setCount(count + 1)}>+</button>
        <h3>{count}</h3>
        <button  onClick={() => setCount(count - 1)} >-</button>
        </div>
        <div className="reset-button">
            <button type="button" value="reset" onClick={() => löschen()} >Reset</button>
        </div>
        </section>
       
    );
};

export default React_Counter;