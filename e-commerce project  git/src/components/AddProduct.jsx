import React, { useState,useEffect  } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        category: '',
        name: '',
        seller: 'abc@gmail.com',
        price: '',
        stock: '20',
        ratings: '5',
        ratingsCount: '100',
        img: '', 
        im: '',
        shipping: '1',
        quantity: '0'
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [img, setImg] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleChangeFile = async(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        const file = e.target.files[0];
        document.getElementById('im').value = "Backend/uploads"+file.name;
        
        const formData1 = new FormData();
        formData1.append('file', file); // Append the file to FormData

        // Make API request using Axios
        const response = await axios.post('http://127.0.0.1:5000/upload', formData1, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('API Response:', response.data);
        setImg("Backend/uploads"+file.name)
       
    };
    useEffect(() => {
        if (formData.im) {
            // Update the stock value based on the category
            // You can implement your logic here to set the stock value
            // For example, let's set stock to 50 for a specific category
            let updatedStock ="Backend/uploads/"+formData.im.split("\\")[2];
            setFormData({
                ...formData,
                img: updatedStock
            });
        }
    }, [formData.im]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData); 
        try {
            const res = await axios.post('http://localhost:8002/products/updateProduct', formData);
            setMessage(res.data.message);
            setError('');
        } catch (error) {
            console.error('Error updating product:', error);
            setError(error.response?.data?.message || 'Error updating product');
            setMessage('');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center mb-4">Product Information Form</h2>
                        {message && <div className="alert alert-success">{message}</div>}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Product Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="im" className="form-label">Upload Image </label>
                                <input type="file" className="form-control" id="im" name="im" value={formData.im} onChange={handleChangeFile} required />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
