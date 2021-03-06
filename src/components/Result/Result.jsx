import { useState, useEffect } from 'react';
import { useTeam } from '../../contexts/TeamContext';
import { NavLink } from 'react-router-dom';
import './Result.css'

const Result = ({ name, pictureurl, add, remove, id, alignment }) => {
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
            <div className={`card result-main m-3 ${alignment}`}>
                <img className='result-image' src={pictureurl} alt={`${name} thumbnail.`}/>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center">{name}</h5>
                </div>
                <div className="card-body d-flex flex-row justify-content-evenly">
                    <NavLink to={`/hero/${id}`}>
                        <button className="btn btn-primary">Details</button>
                    </NavLink>
                    {added === true ?
                        <button onClick={remove} id={id} className="btn btn-danger result-btn">Remove</button>
                        : <button onClick={add} id={id} className="btn btn-success result-btn">Add</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Result;