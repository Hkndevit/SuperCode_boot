import DayNight from "../../components/DayNight/DayNight";
import React_Counter from "../../components/React_Counter/React_Counter";
import React_Input from "../../components/React_Input/React_Input";
import ReactStateFaq from "../../components/React_State_Faq/ReactStateFaq";
import "./Home.css"

const Home = () => {


    return ( 
        <> 
        <React_Counter/>
        <React_Input/>
        <DayNight />
        <ReactStateFaq />
        </>
     );
}

export default Home;