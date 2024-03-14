
import "./Header.css"
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header> 
        <h3>LOGO</h3>
        <nav>
            <NavLink to="/Speisekarte">Speisekarte</NavLink>
            <NavLink to="/Kontakt">Kontakt</NavLink>
            <NavLink to="/Öffnungszeiten">Öffnungszeiten</NavLink>
            <NavLink to="/Galerie">Galerie</NavLink>
        </nav>
        </header>
    )
}

export default Header;