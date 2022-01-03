import './Search.css'
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useTeam } from "../../contexts/TeamContext";
import Result from "../Result/Result";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const mainURL = 'https://superheroapi.com/api/';
    const token = '10226513330317308';
    const { team, handleAdd, handleRemove } = useTeam();
    const [result, setResult] = useState(null);
    const [searchById, setSearchById] = useState(true);

    const handleSelect = (e) => {
        e.target.value === 'id' ? setSearchById(true) : setSearchById(false)
    };

    const validateInput = (value) => {
        let error;
        if (!value) {
            error = 'Required!'
        } else if (searchById === true) {
            if (isNaN(parseInt(value)) || parseInt(value) > 732 || parseInt(value) <= 0) {
                error = 'Must be a number between 1 and 732';
            }
        }
        else if (searchById === false) {
            if (!/^[A-Za-z][A-Za-z ]{0,7}/.test(value)) {
                error = 'Invalid name or characters';
            }
        }
        return error;
    };

    const addSuperhero = ((hero) => {
        let heroById = result.find(({id}) => id === hero.target.id);
        handleAdd(heroById);
    });

    const removeSuperhero = ((hero) => {
        let heroById = team.find(({ id }) => id === hero.target.id);
        handleRemove(heroById);
    })
        
    const findSuperhero = (inputValue) => {
        let handleURL;
        searchById === true ? handleURL = '' : handleURL = 'search/'
        axios({
            baseURL: `https://cors-anywhere.herokuapp.com/${mainURL}${token}/`,
            url: `${handleURL}${inputValue}`
        })
            .then(snapshot =>
                searchById === true ? setResult([snapshot.data]) : setResult(snapshot.data.results)
            )
            .catch(err =>
                console.log(err)
            )
    };

    console.log(result)
    
    return (
        <>
            <div className="container d-flex flex-column">
                <Formik
                onSubmit={values => {
                    findSuperhero(values.input);
                    }}
                    initialValues={{
                        input: ''
                    }}
                >
                {({ errors, touched }) => (
                    <Form className='input-group my-3 d-flex flex-column'>
                        <div className='d-flex flex-row'>
                            <label htmlFor="type" className="input-group-text label-search">Search by</label>
                            <Field
                                className='form-select select-search'
                                onChange={handleSelect}
                                component="select"
                                id="type"
                                name="type"
                                multiple={false}
                                >
                                <option value="id">id</option>
                                <option value="name">name</option>
                            </Field>
                            <Field name="input" type="text" id="input" validate={validateInput} className='form-control input-search' /> 
                            <button type="submit" className='btn btn-secondary btn-search'>
                                <FontAwesomeIcon icon={faSearch} size='2x' className='search-icon' />
                            </button>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            {errors.input && touched.input ? <div className='validation-search'>{errors.input}</div> : null}
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
            {result && result.length > 0 ? <>
                {result.length > 6 ?
                    <h5 className='validation-search'>Too many results, be more specific!</h5>
                    : <div className='container d-flex flex-row justify-content-evenly p-3 m-3 result-container'>
                        {result.map(n =>
                            <Result key={n.id} name={n.name} pictureurl={n.image.url} add={addSuperhero} remove={removeSuperhero} id={n.id} />
                        )}
                    </div>
                }
            </> : result === undefined ? <h5 className='validation-search'>No results for that given name</h5> : null}
        </>
    )
}

export default Search;