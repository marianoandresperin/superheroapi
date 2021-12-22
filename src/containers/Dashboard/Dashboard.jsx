import { useLogin } from "../../contexts/LoginContext";
import Login from "../../components/Login/Login";
import Superhero from "../../components/Superhero/Superhero";
import { useTeam } from "../../contexts/TeamContext";
import Search from "../../components/Search/Search";

const Dashboard = () => {
    const { auth, logOut } = useLogin();
    const { team, handleRemove } = useTeam();

    const handleLogOut = () => {
        logOut();
    }

    return (
        <>
            <div className="container-fluid bg-dark h-100">
                <div className="container d-flex justify-content-center bg-primary">
                    {auth === true ? <><h1>Logged in as: {localStorage.getItem('email')}</h1>
                        <button type="button" onClick={handleLogOut}>Log Out</button>
                        <Search />
                        {team ? <> 
                            {team.map(n =>
                                <Superhero key={n.id} name={n.name} pictureurl={n.image.url} intelligence={n.powerstats.intelligence} strength={n.powerstats.strength} speed={n.powerstats.speed} durability={n.powerstats.durability} power={n.powerstats.power} combat={n.powerstats.combat} remove={handleRemove}/>
                            )}
                        </> : <h1>Your superhero list is empty!</h1>
                        } </> : <Login /> 
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard;