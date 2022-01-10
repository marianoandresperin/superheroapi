import './SuperheroDetail.css'

const SuperheroDetail = ({ name, pictureurl, alias, height, weight, haircolor, eyecolor, workplace, remove, add, id, added, goodOrBad }) => {

    return (
        <>
            <div className='container-fluid background d-flex flex-column justify-content-center align-items-center'>
                <div className={`card w-75 ${goodOrBad}`}>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column col-6'>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Alias: {alias}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className={`list-group-item ${goodOrBad}`}>Height: {height}</li>
                                <li className={`list-group-item ${goodOrBad}`}>Weight: {weight}</li>
                                <li className={`list-group-item ${goodOrBad}`}>Hair color: {haircolor}</li>
                                <li className={`list-group-item ${goodOrBad}`}>Eye color: {eyecolor}</li>
                                <li className={`list-group-item ${goodOrBad}`}>Workplace: {workplace}</li>
                            </ul>  
                        </div>
                        <div className='col-6 d-flex flex-row justify-content-center my-2'>
                            <img src={pictureurl} className='w-50' alt={`${name} thumbnail.`}/>
                        </div>
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