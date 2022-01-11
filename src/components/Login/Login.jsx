import './Login.css'
import { useLogin } from '../../contexts/LoginContext';

const Login = () => {    
    const { logIn, auth, logOut } = useLogin();

    const handleLogOut = () => {
        logOut();
    }
    
    const handleLogIn = () => {
        logIn();
    }

    return (
        auth === true ? <>
            <h1 className="logged m-2">Welcome!</h1>
            <button type="button" className="btn btn-outline-danger m-2" onClick={handleLogOut}>Sign out</button> </>
            : <> 
            <h1 className="logged m-2">Log in</h1>
            <button type="submit" className='btn btn-outline-success m-2 login-btn' onClick={handleLogIn}>Sign in</button> </>
    )
}

export default Login;