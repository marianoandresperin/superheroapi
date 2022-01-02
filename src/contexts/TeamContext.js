import { createContext, useContext, useState } from "react";
const TeamContext = createContext();
export const useTeam = () => useContext(TeamContext);

const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([])

    const handleAdd = ((hero) => {
        const isInTeam = team.some((findHero) => findHero.id === hero.id);
        
        if (!isInTeam && team.length < 6) {
            setTeam([...team, hero]);
        };
    });

    const handleRemove = ((hero) => {
        let getHero = team.find(({ id }) => id === hero.id);
        const getHeroIndex = team.indexOf(getHero);
        team.splice(getHeroIndex, 1);
        setTeam([...team]);
    });

    console.log(team);

    return (
        <TeamContext.Provider value={{ team, setTeam, handleRemove, handleAdd }} >
            {children}
        </TeamContext.Provider>
    )
}

export default TeamProvider;