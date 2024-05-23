import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { useFormik } from "formik";
import { loginSchema } from './Schema';


const initialValues = {
    email: "",
    password: ""
};
export const Signup = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
            },
        });
    return (
        <div className="container-fluid BG-COLOR">
            <div className="row">
                <div className="col-md-4">
                    <div className="Sign-form p-5">
                        <div className='Txt'>
                            <h1><FontAwesomeIcon icon={faUserLock} className='px-2' />Sign In</h1>
                            <input className='mt-4'
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <br />
                            {errors.email && touched.email ? (
                                <p className="form-error">{errors.email}</p>
                            ) : null}<br />

                            <input
                                type="password"
                                autoComplete="off"
                                name="password"
                                id="pwd"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? (
                                <p className="form-error">{errors.password}</p>
                            ) : null}
                            <div class="form-check">
                                <input class="form-check-input mt-4" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label class="form-check-label mt-4" for="flexCheckIndeterminate">
                                    Remember Password
                                </label>
                            </div>
                            <br />
                            <button className="BTN2 w-100">Sign In</button>
                            <hr className='hr hr-blurry' />
                            <button className="BTN3 w-100"><FontAwesomeIcon icon={faGoogle} className='px-2' />Sign In With Google</button> <br />
                            <button className="BTN4 w-100"><FontAwesomeIcon icon={faFacebook} className='px-2' />Sign In With Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}