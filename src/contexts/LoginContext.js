import { createContext, useContext, useState } from "react";

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
    const [auth, setAuth] = useState(true)

    const logIn = () => {
        setAuth(true)
    }

    const logOut = () => {
        setAuth(false)
    }

    return (
        <LoginContext.Provider value={{ auth, logOut, logIn }} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;