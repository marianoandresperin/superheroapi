import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Navbar.css";

const Navbar = () => {

    return (
        <nav className="navbar bg-dark">
            <div className="logo-container d-flex align-items-center justify-content-center">
                <Link to={"/"} className="logo-link">
                    <p className="navbar-brand logo m-0">
                    SuperHeroAPI
                    </p>
                </Link>
            </div>
            <div className="d-flex flex-row align-items-center">
                <Login />
            </div>
        </nav>
    )
}

export default Navbar;