const Result = ({ name, pictureurl, details, remove, id }) => {

    return (
        <>
            <div className="bg-light w-25 d-flex flex-column">
                <h3>{name}</h3>
                <img src={pictureurl} alt={`${name} thumbnail.`}/>
                <div className="d-flex row">
                    <button onClick={details}>Details</button>
                    <button id={id} onClick={remove}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default Result;