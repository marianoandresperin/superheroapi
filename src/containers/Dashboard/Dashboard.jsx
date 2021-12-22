import { useEffect } from "react";
import axios from 'axios'
import { useLogin } from "../../contexts/LoginContext";
import Login from "../../components/Login/Login";
import Superhero from "../../components/Superhero/Superhero";
import { useSuperheros } from "../../contexts/SuperherosContext";
import Search from "../../components/Search/Search";

const Dashboard = () => {
    const { auth, logOut } = useLogin();
    const { superheros, setSuperheros, handleRemove } = useSuperheros();
    const mainURL = 'https://superheroapi.com/api/';
    const token = '10226513330317308';

    useEffect(() => {
        axios({
            baseURL: `https://cors-anywhere.herokuapp.com/${mainURL}${token}/`,
            url: '5'
        })
        
            .then(snapshot => 
                setSuperheros([...superheros, snapshot.data])
            )
            
            .catch(err => {
                console.log(err)
            })
          
    }, [])
    console.log(superheros)

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
                        {superheros ? <> 
                            {superheros.map(n =>
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