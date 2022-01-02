import { useEffect, useState } from 'react';
import { useTeam } from '../../contexts/TeamContext';
import './SuperheroDetail.css'

const SuperheroDetail = ({ name, pictureurl, alias, height, weight, haircolor, eyecolor, workplace, remove, add, id }) => {
    const { team } = useTeam();
    const [added, setAdded] = useState(false);

    useEffect(() => {
        if (team.some((hero) => hero.id === id)) {
            setAdded(true);
        } else {
            setAdded(false);
        }
    }, [team, id])

    return (
        <>
            <div className='container-fluid background d-flex flex-column justify-content-center align-items-center'>
                <div className="card w-75">
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column w-50'>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Alias: {alias}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Height: {height}</li>
                                <li className="list-group-item">Weight: {weight}</li>
                                <li className="list-group-item">Hair color: {haircolor}</li>
                                <li className="list-group-item">Eye color: {eyecolor}</li>
                                <li className="list-group-item">Workplace: {workplace}</li>
                            </ul>  
                        </div>
                        <img src={pictureurl} className='w-50' alt={`${name} thumbnail.`}/>
                    </div>
                    <div className="card-body d-flex flex-row justify-content-evenly">
                            {added === true ?
                                <button onClick={remove} id={id} className="btn btn-danger result-btn">Remove</button>
                                : <button onClick={add} id={id} className="btn btn-success result-btn">Add</button>
                            }
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default SuperheroDetail;