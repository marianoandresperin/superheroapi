import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useTeam } from "../../contexts/TeamContext";
import Result from "../Result/Result";

const Search = () => {
    const mainURL = 'https://superheroapi.com/api/';
    const token = '10226513330317308';
    const { team, handleAdd, handleRemove } = useTeam();
    const [result, setResult] = useState(null)
    const [searchById, setSearchById] = useState(true)

    const handleSelect = (e) => {
        e.target.value === 'id' ? setSearchById(true) : setSearchById(false)
    };

    const validateInput = (value) => {
        let error;
        if (!value) {
            error = 'Required!'
        } else if (searchById === true) {
            if (isNaN(parseInt(value)) || parseInt(value) > 500 || parseInt(value) <= 0) {
                error = 'Must be a number between 1 and 500';
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
        let heroById = [result].find(({id}) => id === hero.target.id);
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
                searchById === true ? setResult(snapshot.data) : setResult(snapshot.data.results)
            )
            .catch(err =>
                console.log(err)
            )
    };
    
    return (
        <>
            <div className="container d-flex">
                <Formik
                    initialValues={{
                        input: '',
                    }}
                onSubmit={values => {
                    findSuperhero(values.input);
                }}
                >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="type">Search by</label>
                        <Field
                            onChange={handleSelect}
                            component="select"
                            id="type"
                            name="type"
                            multiple={false}
                        >
                            <option defaultValue value="id">id</option>
                            <option value="name">name</option>
                        </Field>
                        <Field name="input" validate={validateInput} />
                        {errors.input && touched.input && <div>{errors.input}</div>}
                        <button type="submit">Go!</button>
                    </Form>
                )}
                </Formik>
            </div>
            {result ? <>
            {searchById === true ?
                <Result name={result.name} id={result.id} pictureurl={result.image.url} add={addSuperhero} remove={removeSuperhero} />
                : <> {result.map(n =>
                    <Result key={n.id} name={n.name} pictureurl={n.image.url} add={addSuperhero} remove={removeSuperhero} id={n.id}/>
                )} </>
            } </>
            : null}
        </>
    )
}

export default Search;