import "./Nav.css";
import DayNight from "../../components/DayNight/DayNight";

const Nav = () => {
    return ( 
        <nav>
            <p>JS.</p>
            <div>
            <a href="#">projects</a>
            <a href="#">skills</a>
            <a href="#">contact</a>
            <DayNight />
            </div>
            
        </nav>
     );
};
 
export default Nav;