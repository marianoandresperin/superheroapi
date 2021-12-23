import './Login.css'
import { Formik, Form, Field } from 'formik';
import { useLogin } from '../../contexts/LoginContext';

const Login = () => {    
    const { formSubmit } = useLogin();
    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    function validatePassword(value) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }
    
    const handleSubmit = (value) => {
        formSubmit(value);
    }

    return (
        <div className='d-flex flex-row '> 
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
            >
            {({ errors, touched }) => (
                <Form className='d-flex flex-row input-group validation-field'>
                <div className='d-flex flex-column align-content-center'>
                    <Field name="email" placeholder="Email" validate={validateEmail} className="form-control" />
                    {errors.email && touched.email && <div className='validation-text'>{errors.email}</div>}
                </div>
                <div className='d-flex flex-column justify-content-center'>
                <Field name="password" type="password" placeholder="Password" validate={validatePassword} className="form-control" />
                    {errors.password && touched.password && <div className='validation-text'>{errors.password}</div>}
                </div>
                <button type="submit" className='btn btn-outline-secondary'>Sign in</button>
                </Form> 
            
                    
                    
            )}
            </Formik> 
        </div>
    )
}

export default Login;