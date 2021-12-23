import Login from "../Login/Login";
import { useLogin } from "../../contexts/LoginContext";
import "./Navbar.css";

const Navbar = () => {
    const { auth, logOut } = useLogin();

    const handleLogOut = () => {
        logOut();
    }

    return (
        <nav className="navbar navbar-dark bg-dark h-10">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                SuperHeroAPI
                </a>
                <div className="d-flex flex-row">
                    {auth === true ? <><h1 className="logged">Logged as: {localStorage.getItem('email')}</h1>
                    <button type="button" onClick={handleLogOut}>Log Out</button> </> : <Login />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;