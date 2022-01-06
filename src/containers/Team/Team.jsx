import './Team.css'
import Superhero from "../../components/Superhero/Superhero";
import { useTeam } from "../../contexts/TeamContext";

const Team = () => {
    const { team, handleRemove } = useTeam();

    const removeSuperhero = ((hero) => {
        let heroById = team.find(({ id }) => id === hero.target.id);
        handleRemove(heroById);
    })

    const getTotal = (stat) => {
        let total = team.map(hero => parseInt(hero.powerstats[stat]));
        return total.reduce((a, b) => a + b);
    }

    const getWeight = () => {
        const weights = team.map(hero => hero.appearance.weight[1])
        console.log(weights)
        
    }

    let maxValue

    return (
        <>
            {team.length > 0 ? <>
                <h5 className='team-title mt-2 mb-0'>Your team: INTELIGENNC</h5>
                <div className='team-container'>
                    <div className="d-flex flex-row">
                    {team.map(n =>
                        <Superhero
                            key={n.id}
                            name={n.name}
                            pictureurl={n.image.url}
                            intelligence={n.powerstats.intelligence}
                            strength={n.powerstats.strength}
                            speed={n.powerstats.speed}
                            durability={n.powerstats.durability}
                            power={n.powerstats.power}
                            combat={n.powerstats.combat}
                            remove={removeSuperhero}
                            alignment={n.biography.alignment}
                            id={n.id}
                        />
                    )}
                    </div>
                    <div>
                        <div>
                            <h5>{`Intelligence: ${getTotal('intelligence')}`}</h5>
                            <h5>{`Strength: ${getTotal('strength')}`}</h5>
                            <h5>{`Speed: ${getTotal('speed')}`}</h5>
                            <h5>{`Durability: ${getTotal('durability')}`}</h5>
                            <h5>{`Power: ${getTotal('power')}`}</h5>
                            <h5>{`Combat ${getTotal('combat')}`}</h5>
                        </div>
                        <div>
                            {`Peso promedio ${getWeight()}`}
                            Altura promedio
                        </div>
                    </div>
                </div>
                </> : <h1 className='message my-5'>Your team is empty, search for your favourite Superheroes</h1>
            }
        </>
    )
}

export default Team;