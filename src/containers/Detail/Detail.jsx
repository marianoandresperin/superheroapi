import './Dashboard.css';
import { useLogin } from "../../contexts/LoginContext";
import { useTeam } from "../../contexts/TeamContext";
import SuperheroDetail from '../../components/SuperheroDetail/SuperheroDetail';
import { useState } from 'react';

const Detail = () => {
    const { auth } = useLogin();
    const { team, handleRemove } = useTeam();
    const [detail, setDetail] = useState(null);

    const removeSuperhero = ((hero) => {
        let heroById = team.find(({ id }) => id === hero.target.id);
        handleRemove(heroById);
    })

    return (
        <>
            <div className="container-fluid background">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    {auth === true ? 
                        <SuperheroDetail remove={removeSuperhero} name={detail.name} alias={detail.biography.alias} height={detail.appearance.height[1]} weight={detail.appearance.weight[1]} />
                    : <h1>You must be logged in!</h1>}
                </div>
            </div>
        </>
    )
}

export default Detail;