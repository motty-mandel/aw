import React from "react";
import axios from 'axios';

export default function Purchases() {
    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:5000/create-checkout-session', {
                // Add any necessary data here
            });
            const { url } = response.data;
            window.location.href = url;
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    return (
        <button id="button" onClick={handleClick}>Checkout</button>
    );
}