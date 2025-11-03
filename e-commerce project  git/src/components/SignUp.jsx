import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = e.target.elements;

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            // Make signup API request
            const res = await axios.post('http://localhost:8002/users/signup', {
                fullname: name.value,
                email: email.value,
                password: password.value,
                confirmpassword: confirmPassword.value
            });

            // Store token
            localStorage.setItem('token', res.data.token);

            // Redirect to logout page
            navigate('/logout');
        } catch (error) {
            // Handle signup error
            setErrorMessage(error.response.data.message || "Signup failed");
        }
    };

    return (
        <>
            <div className='login-section padding-tb section-bg'>
                <div className='container'>
                    <div className='account-wrapper'>
                        <h3 className='title'>Register Now</h3>
                        <form className='account-form' onSubmit={handleSignUp}>
                            {/* Form fields */}
                            <div className='form-group'>
                                <input type='name' name='name' id='name' placeholder='Full Name' required />
                            </div>
                            <div className='form-group'>
                                <input type='email' name='email' id='email' placeholder='Email Address' required />
                            </div>
                            <div className='form-group'>
                                <input type='password' name='password' id='password' placeholder='Enter password*' required />
                            </div>
                            <div className='form-group'>
                                <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm password*' required />
                            </div>

                            {/* Submit button */}
                            <div className='form-group'>
                                <button className='d-block lab-btn' type='submit'>SignUp Now</button>
                            </div>
                            {/* Error message */}
                            {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                        </form>

                        {/* Additional UI elements */}
                        <div className='account-buttom'>
                            <span className='d-block cate pt-10'> Have an account?
                                <Link to='/login'>Login</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
