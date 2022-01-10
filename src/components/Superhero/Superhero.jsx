import './Superhero.css'
import { NavLink } from "react-router-dom";

const Superhero = ({ name, pictureurl, intelligence, strength, speed, durability, power, combat, remove, id, alignment }) => {

    return (
        <>
            <div className={`card col-2 ${alignment}`}>
                <img className='hero-image' src={pictureurl} alt={`${name} thumbnail.`}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className={`list-group-item ${alignment}`}>Intelligence: {intelligence}</li>
                    <li className={`list-group-item ${alignment}`}>Strength: {strength}</li>
                    <li className={`list-group-item ${alignment}`}>Speed: {speed}</li>
                    <li className={`list-group-item ${alignment}`}>Durability: {durability}</li>
                    <li className={`list-group-item ${alignment}`}>Power: {power}</li>
                    <li className={`list-group-item ${alignment}`}>Combat: {combat}</li>
                </ul>
                <div className="card-body d-flex flex-row justify-content-evenly">
                    <NavLink to={`/hero/${id}`}>
                        <button className="btn btn-primary">Details</button>
                    </NavLink>
                    <button id={id} onClick={remove} className="btn btn-danger">Remove</button>
                </div>
            </div>
        </>
    )
}

export default Superhero;