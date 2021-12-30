// import './Dashboard.css';
import { useLogin } from "../../contexts/LoginContext";
import { useTeam } from "../../contexts/TeamContext";
import SuperheroDetail from '../../components/SuperheroDetail/SuperheroDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const { auth } = useLogin();
    const { team, handleRemove, handleAdd } = useTeam();
    const [detail, setDetail] = useState(null);
    const [inTeam, setInTeam] = useState(false);
    const { heroId } = useParams();
    const mainURL = 'https://superheroapi.com/api/';
    const token = '10226513330317308';

    const removeSuperhero = ((hero) => {
        let heroById = team.find(({ id }) => id === hero.target.id);
        handleRemove(heroById);
    })

    const addSuperhero = ((hero) => {
        let heroById = team.find(({ id }) => id === hero.target.id);
        handleAdd(heroById);
    })

    axios({
        baseURL: `https://cors-anywhere.herokuapp.com/${mainURL}${token}/`,
        url: `${heroId}`
    })
    .then(snapshot =>
        setDetail(snapshot.data)
        // console.log(snapshot.data)
    )
    .catch(err =>
        console.log(err)
    )

    useEffect(() => {
        axios({
            baseURL: `https://cors-anywhere.herokuapp.com/${mainURL}${token}/`,
            url: `${heroId}`
        })
        .then(snapshot =>
            setDetail(snapshot.data)
            // console.log(snapshot.data)
        )
        .catch(err =>
            console.log(err)
        )
        if (team.some((hero) => hero.id === heroId)) {
            setInTeam(true);
        } else {
            setInTeam(false);
        }
    }, [team, heroId])

    return (
        <>
            <div className="container-fluid background">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    {auth === true ? <>
                        {detail && inTeam === true ? <SuperheroDetail
                            name={detail.name}
                            alias={detail.biography.aliases[0]}
                            height={detail.appearance.height[1]}
                            weight={detail.appearance.weight[1]}
                            workplace={detail.work["base"]}
                            eyecolor={detail.appearance["eye-color"]}
                            haircolor={detail.appearance["hair-color"]}
                            remove={removeSuperhero}
                        /> : <SuperheroDetail
                            name={detail.name}
                            alias={detail.biography.aliases[0]}
                            height={detail.appearance.height[1]}
                            weight={detail.appearance.weight[1]}
                            workplace={detail.work["base"]}
                            eyecolor={detail.appearance["eye-color"]}
                            haircolor={detail.appearance["hair-color"]}
                            add={addSuperhero}
                        />
                        }
                    </> : <h1>You must be logged in!</h1>}
                </div>
            </div>
        </>
    )
}

export default Detail;