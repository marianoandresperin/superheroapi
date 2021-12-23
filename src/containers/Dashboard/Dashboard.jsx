import './Dashboard.css';
import { useLogin } from "../../contexts/LoginContext";
import Superhero from "../../components/Superhero/Superhero";
import { useTeam } from "../../contexts/TeamContext";
import Search from "../../components/Search/Search";

const Dashboard = () => {
    const { auth } = useLogin();
    const { team, handleRemove } = useTeam();

    const removeSuperhero = ((hero) => {
        let heroById = team.find(({ id }) => id === hero.target.id);
        handleRemove(heroById);
        // console.log(heroById)
    })

    return (
        <>
            <div className="container-fluid background">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    {auth === true ? <> <Search />
                        {team ? <> 
                            {team.map(n =>
                                <Superhero key={n.id} name={n.name} pictureurl={n.image.url} intelligence={n.powerstats.intelligence} strength={n.powerstats.strength} speed={n.powerstats.speed} durability={n.powerstats.durability} power={n.powerstats.power} combat={n.powerstats.combat} remove={removeSuperhero} id={n.id} />
                            )}
                        </> : <h1>Your superhero list is empty!</h1>
                        } </> : <h1>You must be logged in!</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard;