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

    const getAvg = (key) => {
        let initials = team.map(hero => parseInt(hero.appearance[key][1].replace(/\D/g, '')));
        let total = initials.reduce((a, b) => a + b);
        return Math.round(total / team.length);
    }

    const getType = () => {
        let totalStats = {
            Intelligence: getTotal('intelligence'),
            Strength: getTotal('strength'),
            Speed: getTotal('speed'),
            Durability: getTotal('durability'),
            Power: getTotal('power'),
            Combat: getTotal('combat')
        }
        return Object.keys(totalStats).reduce((a, b) => totalStats[a] >= totalStats[b] ? a : b);
    }

    return (
        <>
            {team.length > 0 ? <>
                <h3 className='team-title mt-2 mb-0'>Your team: {getType()}</h3>
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
                    <div className='d-flex flex-column my-3'>
                        <div className='d-flex flex-row mt-3 pt-5 stats-border'>
                            <h5 className='col-2 d-flex justify-content-center team-stats'>{`Intelligence: ${getTotal('intelligence')}`}</h5>
                            <h5 className='col-2 d-flex justify-content-center team-stats'>{`Strength: ${getTotal('strength')}`}</h5>
                            <h5 className='col-2 d-flex justify-content-center team-stats'>{`Speed: ${getTotal('speed')}`}</h5>
                            <h5 className='col-2 d-flex justify-content-center team-stats'>{`Durability: ${getTotal('durability')}`}</h5>
                            <h5 className='col-2 d-flex justify-content-center team-stats'>{`Power: ${getTotal('power')}`}</h5>
                            <h5 className='col-2 d-flex justify-content-center team-stats'>{`Combat: ${getTotal('combat')}`}</h5>
                        </div>
                        <div className='d-flex flex-row py-2'>
                            <h5 className='col-6 d-flex justify-content-center team-stats'>{`Average Team Weight: ${getAvg('weight')} kg`}</h5>
                            <h5 className='col-6 d-flex justify-content-center team-stats'>{`Average Team Height: ${getAvg('height')} cm`}</h5>
                        </div>
                    </div>
                </div>
                </> : <h3 className='message my-5'>Your team is empty, search for your favourite Superheroes</h3>
            }
        </>
    )
}

export default Team;