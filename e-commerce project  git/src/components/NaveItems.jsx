import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // Import the useAuth hook
import logo from '../assets/images/logo/logo.jpg';
import './mode.css'
const NavItems = () => {
    const { isLoggedin, logout } = useAuth(); // Use the useAuth hook and get the logout function
    console.log(isLoggedin);

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });

    const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        // Save dark mode preference in localStorage for persistence
        localStorage.setItem('darkMode', !darkMode);
    };

    // Check dark mode preference on component mount
    useState(() => {
        const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        setDarkMode(isDarkMode);
    }, []);


    return (
        <>
            <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
                {/* header start */}
                {/* header button  */}
                <div className='header-bottom'>
                    <div className='container'>
                        <div className='header-wrapper'>
                            {/* logo */}
                            <div className='logo-search-acte'>
                                <div className='logo'>
                                    <Link to={"/"}>
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                            </div>
                            {/* menu area  */}
                            <div className='menu-area'>
                                <div className='menu'>
                                    <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                        <li><Link to='/' className='lab-btn me-3'>Home</Link></li>
                                        {/* Conditionally render Shop link */}
                                        <li>

                                            <Link to='/shop' className='lab-btn me-3'>Shop</Link>

                                        </li>
                                        <li><Link to='/blog' className='lab-btn me-3'>Blog</Link></li>
                                        <li><Link to='/about' className='lab-btn me-3'>About</Link></li>
                                        <li><Link to='/contact' className='lab-btn me-3'>Contact</Link></li>
                                    </ul>
                                </div>
                                {/* Conditionally render login/logout buttons */}
                               {/* Toggle button for dark mode */}
                               {/* <div className='dark-mode-toggle'>
                                    <input
                                        type='checkbox'
                                        id='dark-mode-toggle'
                                        checked={darkMode}
                                        onChange={toggleDarkMode}
                                    />
                                    <label htmlFor='dark-mode-toggle'></label>
                                </div> */}
                                {isLoggedin ? (
                                    <Link to='/logout' className='lab-btn me-3'><span>Logout</span></Link>
                                ) : (
                                    <>
                                        <Link to='/login' className='lab-btn me-3'><span>Login</span></Link>
                                        <Link to='/sign-up' className='lab-btn me-3'><span>Create Account</span></Link>
                                    </>
                                )}

                                {/* menu toggler for small device */}
                                <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}>
                                    {/* Add the three-dot icon */}
                                    <i className="icofont-navigation-menu"></i>
                                </div>
                                {/* social toggle   */}
                                <div className='ellipsis-bar d-md-none'
                                    onClick={() => setSocialToggle(!socialToggle)}
                                >
                                    <i className="icofont-info-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavItems;
