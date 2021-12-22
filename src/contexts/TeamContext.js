import { createContext, useContext, useState } from "react";
const TeamContext = createContext();
export const useTeam = () => useContext(TeamContext);

const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([])

    const handleAdd = ((hero) => {
        const isInTeam = team.some((findHero) => findHero.id === hero.id);
        
        if (!isInTeam) {
            setTeam([...team, hero]);
        };
    });

    const handleRemove = ((buttonId) => {
        let getHeroId = team.find(({ id }) => id === buttonId.target.id);
        const getHeroIndex = team.indexOf(getHeroId);
        team.splice(getHeroIndex, 1);
        setTeam([...team]);
    });

    return (
        <TeamContext.Provider value={{ team, setTeam, handleRemove, handleAdd }} >
            {children}
        </TeamContext.Provider>
    )
}

export default TeamProvider;