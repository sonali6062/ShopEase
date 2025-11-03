import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Seller = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [panNumber, setPanNumber] = useState('');
    // State to store the selected file
    const [selectedFile, setSelectedFile] = useState(null);

    // Handle file selection
    const handleFileChange =async (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        // Use FileReader to read file contents
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileContent = event.target.result;
            console.log('File content:', fileContent);
        };
        reader.readAsText(file); // You can use readAsArrayBuffer() for binary files

        // Log other details of the selected file
        console.log('Selected file details:');
        console.log('Name:', file.name);
        console.log('Size:', file.size, 'bytes');
        console.log('Type:', file.type);
        console.log('Last Modified:', new Date(file.lastModified));
        // Example: Call an existing API with the file
        try {
            const formData = new FormData();
            formData.append('file', file); // Append the file to FormData

            // Make API request using Axios
            const response = await axios.post('http://127.0.0.1:5000/fact', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('API Response:', response.data);
            
            setErrorMessage(null); 
            if(response.data=='-1'){
               setErrorMessage("Selected document is not PAN card ");
               setFatherName('');
               setPanNumber('');
               return ; 
            }
            const splitString = response.data.split('*');
            console.log(name);
            console.log(splitString[1]);
            if(name.toLowerCase()!=splitString[1].toLowerCase()){
             
               setErrorMessage("Account Holder's name is not matching with PAN card name ");
               setFatherName('');
               setPanNumber('');
               return ;  
            }
            
            
            // Optionally, handle the API response based on your application logic
            setFatherName(splitString[2]);
            setPanNumber(splitString[0]);
        } catch (error) {
            console.error('API Error:', error);
            // Handle error state or display error message
            setErrorMessage('Failed to upload file. Please try again.');
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, Ifsccode, accountNumber,fatherName,panNumber } = e.target.elements;
    
        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            setErrorMessage("Passwords do not match");
            return;
        }
    
        try {
            // Make signup API request
            const res = await axios.post('http://localhost:8002/seller', {
                fullname: name.value,
                email: email.value,
                password: password.value,
                confirmpassword: confirmPassword.value,
                ifsc: Ifsccode.value,
                accountNumber: accountNumber.value,
                fatherName: fatherName.value,
                panNumber: panNumber.value

            });
    
            // Store token
            localStorage.setItem('token', res.data.token);
    
            // Redirect to logout page
            navigate('/addProduct');
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
                        <h3 className='title'>Seller Id</h3>
                        <form className='account-form' method='post' onSubmit={handleSignUp}>
                            <div className='form-group'>
                                <input type='text' name='name' id='name' placeholder='Full Name'value={name} onChange={(e) => setName(e.target.value)}  required />
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
                            <div className='form-group'>
                                <label htmlFor='Ifsccode'><b>IFSC Code</b></label>
                                <input type='text' name='Ifsccode' id='Ifsccode' placeholder='IFSC Code' required />
                            </div>
                            <div className='form-group'>
                                <input type='text' name='accountNumber' id='accountNumber' placeholder='Account Number' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='kycImage'><b>Upload PAN Card</b></label>
                                <input type='file' name='kycImage' id='kycImage' accept='image/*' onChange={handleFileChange} required />
                            </div>
                            <div className='form-group'>
                                <input type='text' name='fatherName' id='fatherName' placeholder="Father's Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} required />
                            </div>
                            <div className='form-group'>
                                <input type='text' name='panNumber' id='panNumber' placeholder='PAN Number'value={panNumber} onChange={(e) => setPanNumber(e.target.value)}  required />
                            </div>
                            <div className='form-group'>
                                <button className='d-block lab-btn' type='submit'>Click Me to Create Seller Id</button>
                            </div>
                            {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                        </form>
                        <div className='account-buttom'>
                            <span className='d-block cate pt-10'> Have an account?
                                <Link to='/login'>Seller Login</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Seller;
