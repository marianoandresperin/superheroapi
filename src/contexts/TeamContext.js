import { createContext, useContext, useState } from "react";
const TeamContext = createContext();
export const useTeam = () => useContext(TeamContext);

const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([])

    const handleAdd = ((hero) => {
        const isInTeam = team.some((findHero) => findHero.id === hero.id);
        const heroAlig = hero.biography.alignment;
        const badGuys = team.filter(heroes => heroes.biography.alignment === "bad");
        const goodGuys = team.filter(heroes => heroes.biography.alignment === "good");

        if (!isInTeam && heroAlig === "bad" && badGuys.length < 3 && team.length < 6) {
            setTeam([...team, hero]);
        } else if (!isInTeam && heroAlig === "good" && goodGuys.length < 3 && team.length < 6) {
            setTeam([...team, hero]);
        } else if (!isInTeam && heroAlig !== "good" && heroAlig !== "bad" && team.length < 6) {
            setTeam([...team, hero]);
        }
    });

    const handleRemove = ((hero) => {
        let getHero = team.find(({ id }) => id === hero.id);
        const getHeroIndex = team.indexOf(getHero);
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