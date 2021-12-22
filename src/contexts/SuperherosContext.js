import { createContext, useContext, useState } from "react";
const SuperherosContext = createContext();
export const useSuperheros = () => useContext(SuperherosContext);

const SuperherosProvider = ({ children }) => {
    const [superheros, setSuperheros] = useState([])

    const handleAdd = ((buttonId) => {
            let getHeroId = superheros.find(({ id }) => id === buttonId.target.id);
            const getHeroIndex = superheros.indexOf(getHeroId);
            superheros.splice(getHeroIndex, 1);
            setSuperheros([...superheros]);
        });

    const handleRemove = ((buttonId) => {
        let getHeroId = superheros.find(({ id }) => id === buttonId.target.id);
        const getHeroIndex = superheros.indexOf(getHeroId);
        superheros.splice(getHeroIndex, 1);
        setSuperheros([...superheros]);
    });

    return (
        <SuperherosContext.Provider value={{ superheros, setSuperheros, handleRemove }} >
            {children}
        </SuperherosContext.Provider>
    )
}

export default SuperherosProvider;