import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useSuperheros } from "../../contexts/SuperherosContext";

const Search = () => {
    const mainURL = 'https://superheroapi.com/api/';
    const token = '10226513330317308';
    const { superheros, setSuperheros } = useSuperheros();
    const [result, setResult] = useState(null)
    const [searchById, setSearchById] = useState(true)

    const handleSelect = (e) => {
        e.target.value === 'id' ? setSearchById(true) : setSearchById(false)
    }

    console.log(searchById)

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
    }

    const findSuperhero = (inputValue) => {
        let handleURL;
        searchById === true ? handleURL = '' : handleURL = 'search/'
        axios({
            baseURL: `https://cors-anywhere.herokuapp.com/${mainURL}${token}/`,
            url: `${handleURL}${inputValue}`
        })
            .then(snapshot =>
                setResult(snapshot.data)
            )
            .catch(err => 
                console.log(err)
            )
    }

    console.log(result)
    
    return (
        <>
            <div className="bg-light w-50 d-flex">
                <Formik
                    initialValues={{
                        input: '',
                    }}
                onSubmit={values => {
                    findSuperhero(values.input);
                }}
                >
                {({ errors, touched, validateField }) => (
                    <Form>
                        <label htmlFor="type">Search by</label>
                        <Field
                            onChange={handleSelect}
                            component="select"
                            id="type"
                            name="type"
                            multiple={false}
                        >
                            <option selected value="id">id</option>
                            <option value="name">name</option>
                        </Field>
                        <Field name="input" validate={validateInput} />
                        {errors.input && touched.input && <div>{errors.input}</div>}
                        <button type="submit">Go!</button>
                    </Form>
                )}
                </Formik>
            </div>
        </>
    )
}

export default Search;