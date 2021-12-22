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
        <div> 
            <h1>Sign In</h1>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
            >
            {({ errors, touched }) => (
                <Form className='d-flex column'>
                <Field name="email" validate={validateEmail} />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <Field name="password" type="password" validate={validatePassword} />
                {errors.password && touched.password && <div>{errors.password}</div>}
                <button type="submit" className=''>Submit</button>
                </Form> 
                
            )}
            </Formik> 
        </div>
    )
}

export default Login;