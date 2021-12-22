const SuperheroDetail = ({ name, pictureurl, intelligence, strength, speed, durability, power, combat, details, remove }) => {

    return (
        <>
            <div className="bg-light w-25 d-flex flex-column">
                <h3>{name}</h3>
                <img src={pictureurl} alt={`${name} thumbnail.`}/>
                <h5>Intelligence: {intelligence}</h5>
                <h5>Strength: {strength}</h5>
                <h5>Speed: {speed}</h5>
                <h5>Durability: {durability}</h5>
                <h5>Power: {power}</h5>
                <h5>Combat: {combat}</h5>
                <div className="d-flex row">
                    <button onClick={details}>Details</button>
                    <button onClick={remove}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default SuperheroDetail;