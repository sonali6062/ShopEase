import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../components/modal.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const CheckOutPage = () => {
  
    // Show modal
    const handleShow = () => setShow(true);

    // Close modal
    const handleClose = () => setShow(false);

    const checkout = async () => {
     

        try {
            const res = await fetch('http://localhost:8002/checkout', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                
            });
            const data = await res.json();
            window.location = data.url;
        } catch (error) {
            console.error('Error during checkout:', error);
            // Handle error
        }
    };

    return (
        <>
            <div className='modalCard'>
                <Button variant='primary' className='py-2' onClick={checkout}>Proceed to Payment</Button>
            </div>
        </>
    );
}

export default CheckOutPage;
