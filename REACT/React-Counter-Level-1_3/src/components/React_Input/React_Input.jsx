import { useState } from "react";
import "./React_Input.css"

const React_Input = () => {
const [firstname, setFirstName] = useState("");
console.log(firstname);
const [lastname, setLastName] = useState("");
const [mailadress, setMailAdress] = useState("");



    return (
        <section className="border">
        <form>
            <div  className="inputs">
                <input onChange={(event) => setFirstName(event.target.value)}
                value={firstname} type="text" placeholder="Vorname" />

                <input onChange={(event) => setLastName(event.target.value)}
                value={lastname} type="text" placeholder="Nachname" />

                <input onChange={(event) => setMailAdress(event.target.value)} 
                value={mailadress} type="mail" placeholder="Email" /> 
            </div>
            
            <div className="outputs">
                <p>Vorname: {firstname}</p>
                <p>Nachname: {lastname}</p>
                <p>Email: {mailadress}</p>
            </div>
        </form>
        </section>
    );
};

export default React_Input;