const Superhero = ({ name, pictureurl, intelligence, strength, speed, durability, power, combat, details, remove, id }) => {

    return (
        <>
            <div className="card col-2">
                <img src={pictureurl} alt={`${name} thumbnail.`}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Intelligence: {intelligence}</li>
                    <li className="list-group-item">Strength: {strength}</li>
                    <li className="list-group-item">Speed: {speed}</li>
                    <li className="list-group-item">Durability: {durability}</li>
                    <li className="list-group-item">Power: {power}</li>
                    <li className="list-group-item">Combat: {combat}</li>
                </ul>
                <div className="card-body d-flex flex-row justify-content-evenly">
                    <button onClick={details} className="btn btn-primary">Details</button>
                    <button id={id} onClick={remove} className="btn btn-danger">Remove</button>
                </div>
            </div>
        </>
    )
}

export default Superhero;