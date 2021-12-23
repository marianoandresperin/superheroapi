import './Result.css'

const Result = ({ name, pictureurl, details, add, remove, id }) => {

    return (
        <>
            <div className="card result-main">
                <img src={pictureurl} alt={`${name} thumbnail.`}/>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center">{name}</h5>
                </div>
                <div className="card-body d-flex flex-row justify-content-evenly">
                    <button onClick={details} className="btn btn-primary result-btn">Details</button>
                    <button onClick={add} id={id} className="btn btn-danger result-btn">Add</button>
                    <button onClick={remove} id={id} className="btn btn-danger result-btn">Remove</button>
                </div>
            </div>
        </>
    )
}

export default Result;