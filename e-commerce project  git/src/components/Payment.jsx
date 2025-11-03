// SuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './payment.css'
const Payment = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <h2 className="success-header">Payment Successful!</h2>
        <p className="success-message">Thank you for your purchase.</p>
        <Link to="/shop" className="back-to-shop-link">Back to Shop</Link>
      </div>
    </div>
  );
}

export default Payment;
