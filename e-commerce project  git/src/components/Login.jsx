import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // Import the useAuth hook
import { Toast } from 'react-bootstrap';
const title = 'Login';
const socialTitle = 'Login with social media';
const btnText = 'Login Now';

const socialList = [
    // { iconName: 'icofont-github', className: 'github', link: 'https://github.com/your-profile' },
    { iconName: 'icofont-facebook', className: 'facebook', link: 'https://www.facebook.com/your-profile' },
    { iconName: 'icofont-google-plus', className: 'google', link: 'https://plus.google.com/your-profile' },
    { iconName: 'icofont-linkedin', className: 'linkedin', link: 'https://www.linkedin.com/in/your-profile' },
    { iconName: 'icofont-instagram', className: 'instagram', link: 'https://www.instagram.com/your-profile' },
];


const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { storeToken } = useAuth(); // Use the storeToken function from useAuth

    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();

        // Destructure form elements from event target
        const { email, password } = e.target.elements;

        // Check if email and password are defined
        if (!email || !password) {
            setErrorMessage("Email and password are required");
            return;
        }

        try {
            // Make login API request
            const res = await axios.post('http://localhost:8002/user/login', {
                email: email.value,
                password: password.value,
            });

            // Check if response is successful and contains data
            if (res && res.data && res.data.token) {
                console.log(res.data); // Log response data if needed

                // Store the token
                storeToken(res.data.token);

                // Redirect to the specified path after successful login
                navigate(from);
                Toast.success("Logged in Successfully");
                alert("Logged in Successfully");
            } else {
                // Handle case when response or response data is undefined
                setErrorMessage("Login failed");
                // Toast.success("Logged in Successfully");

            }
        } catch (error) {
            // Handle login error
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
                alert("username or password incorrect");
            } else {
                setErrorMessage("Login failed");

            }
        }
    };

    return (
        <>
            <div className='login-section padding-tb section-bg'>
                <div className='container'>
                    <div className='account-wrapper'>
                        <h3 className='title'>{title}</h3>
                        <form className='account-form' onSubmit={handleLogin}>
                            <div className='form-group'>
                                <input type='email' name='email' id='email' placeholder='Email Address' required />
                            </div>
                            <div className='form-group'>
                                <input type='password' name='password' id='password' placeholder='Enter password*' required />
                            </div>

                            <div className='form-group'>
                                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                                    <div className='checkgroup'>
                                        <input type='checkbox' name='remember' id='remember' />
                                        <label htmlFor='remember'>Remember Me</label>
                                    </div>
                                    <Link to='/ForgetPass'>Forget password?</Link>
                                </div>
                            </div>
                            <div className='form-group'>
                                <button className='d-block lab-btn' type='submit'><span>{btnText}</span></button>
                            </div>
                            {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                        </form>

                        <div className='account-buttom'>
                            <span className='d-block cate pt-10'>Don't Have an account
                                <Link to='/sign-up'>Sign In</Link>
                            </span>
                            <span className='or'>or</span>

                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className='lab-ul social-icons justify-content-center'>
                                {socialList.map(({ iconName, className, link }) => (
                                    <li key={className}>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <i className={iconName}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
