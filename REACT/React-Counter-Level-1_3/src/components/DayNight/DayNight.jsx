import { useState } from "react";
import "./DayNight.css"

const DayNight = () => {
    const [darkmode, setDarkMode] = useState(false);

    const changeMode = () => {
        setDarkMode((darkmode) => !darkmode)
    };

    return (
        <section className="dayNight"> 
        <div className={darkmode ? "night" : ""}>
            <h1>{darkmode ? "Night" : "Day"}</h1>
            <button onClick={changeMode}>Change to {darkmode ? "Day" : "Night"}</button>
        </div>
        </section>
        
    );
};

export default DayNight;