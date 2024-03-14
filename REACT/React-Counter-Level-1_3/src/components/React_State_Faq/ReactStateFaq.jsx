import { useState } from "react";
import "./ReactStateFaq.css"

const ReactStateFaq = () => {
    const [answer, setAnswer] = useState(false)



    return (
        <section>
            <div className="main-box">
            <p>Why is React great?</p>
            <button onClick={() => setAnswer((answer) => !answer)}>+</button>
            </div>
            <div className={answer ? "answer" : "new-box"}>
                <p>Fast learning Curve</p>
            </div>
        </section>
    )
}

export default ReactStateFaq;