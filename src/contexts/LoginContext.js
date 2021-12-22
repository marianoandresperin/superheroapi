import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    const formSubmit = (values) => {
        console.log(values);
        axios({
            method: 'post',
            url: 'http://challenge-react.alkemy.org/',
            data: values
        })
        .then(res => {
            localStorage.setItem('email', values.email)
            localStorage.setItem('token', res.data.token)
            setAuth(true)
            console.log(res.data.token)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const logOut = () => {
        localStorage.clear()
        setAuth(false)
    }
    
    useEffect(() => {
        localStorage.getItem('token') ? setAuth(true) : setAuth(false)
    }, [auth])

    return (
        <LoginContext.Provider value={{ auth, formSubmit, logOut }} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;