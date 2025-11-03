import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const subTitle = 'Get the Job';
const title = (
    <h2 className='title'>Join on day long Free WorkShop for <b>Advance <span> Mastering </span></b></h2>
)
const desc = "We provide training and hiring services to increase production of traditional goods as well as for delivery. "
const h="I have a driving license";

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        qualification: '',
        interest: '',
        skill: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8002/residence', formData);
            alert('User registered successfully!');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('already user registered');
        }
    };

    return (
        <>
            <section className='register-section padding-tb pb-0'>
                <div className='container'>
                    <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                        <div className='col'>
                            <div className='section-header'>
                                <span className='text-center'><h2>{subTitle}</h2></span>
                                {title}
                                <p className='text-center'>{desc}</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='section-wrapper'>
                                <h4>Register Now</h4>
                                <form className='register-form' onSubmit={handleSubmit}>
                                    <input type='text' name='name' placeholder='Username' className='reg-input' value={formData.name} onChange={handleChange} />
                                    <input type='email' name='email' placeholder='Email' className='reg-input' value={formData.email} onChange={handleChange} />
                                    <input type='text' name='qualification' placeholder='Qualification' className='reg-input' value={formData.qualification} onChange={handleChange} />
                                    <input type='text' name='interest' placeholder='Interest' className='reg-input' value={formData.interest} onChange={handleChange} />
                                    <input type='text' name='skill' placeholder='Skill' className='reg-input' value={formData.skill} onChange={handleChange} />
                                    {/* <input type="checkbox" id="drivingLicense" name="drivingLicense" className="reg-checkbox" /> <h6>{h}</h6> */}

                                    <button type='submit' className='lab-btn'>
                                        Register Now
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}

export default Register;
