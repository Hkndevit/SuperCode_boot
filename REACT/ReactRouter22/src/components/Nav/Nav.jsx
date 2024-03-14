import "./Nav.css"
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <h2>MY Life</h2>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/Blog" >Blog</NavLink>
            </nav>
        </header>
    )
}

export default Nav;