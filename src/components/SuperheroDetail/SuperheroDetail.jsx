import './SuperheroDetail.css'

const SuperheroDetail = ({ name, alias, height, weight, haircolor, eyecolor, workplace, remove, id }) => {

    return (
        <>
            <div className='container-fluid background'>
                <div className="card w-25">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p class="card-text">Alias: {alias}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Height: {height}</li>
                        <li className="list-group-item">Weight: {weight}</li>
                        <li className="list-group-item">Hair color: {haircolor}</li>
                        <li className="list-group-item">Eye color: {eyecolor}</li>
                        <li className="list-group-item">Workplace: {workplace}</li>
                    </ul>
                    <div className="card-body d-flex flex-row justify-content-evenly">
                        <button id={id} onClick={remove} className="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperheroDetail;