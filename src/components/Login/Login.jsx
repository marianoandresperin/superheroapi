import './Login.css'
import { Formik, Form, Field } from 'formik';
import { useLogin } from '../../contexts/LoginContext';

const Login = () => {    
    const { formSubmit, auth, logOut } = useLogin();

    const handleLogOut = () => {
        logOut();
    }

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
        auth === true ? <>
            <h1 className="logged m-2">Logged as: {localStorage.getItem('email')}</h1>
            <button type="button" className="btn btn-outline-danger m-2" onClick={handleLogOut}>Sign out</button> </> :
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className='d-flex flex-row validation-field'>
                    <div className='d-flex flex-column m-2'>
                        <Field name="email" placeholder="Email" validate={validateEmail} className="form-control" />
                        {errors.email && touched.email && <div className='validation-text'>{errors.email}</div>}
                    </div>
                    <div className='d-flex flex-column m-2'>
                        <Field name="password" type="password" placeholder="Password" validate={validatePassword} className="form-control" />
                        {errors.password && touched.password && <div className='validation-text'>{errors.password}</div>}
                    </div>
                    <button type="submit" className='btn btn-outline-success m-2 login-btn'>Sign in</button>
                </Form> 
            )}
        </Formik>
    )
}

export default Login;