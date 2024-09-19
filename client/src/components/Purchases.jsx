// import React, { useState, useEffect } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from '../CheckoutForm';

// // require('dotenv').config;
// const stripePromise = loadStripe("my stripe hiddenness");

// export default function Purchases() {
//     const [clientSecret, setClientSecret] = useState('');
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Call your backend to create the PaymentIntent and get the client secret
//         fetch('http://localhost:5000/create-payment-intent', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ amount: 1000 }), // Replace with the actual amount
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 if (data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                 } else {
//                     throw new Error('Client secret not found in response');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching client secret:', error);
//                 setError(error.message);
//             });
//     }, []);

//     const options = {
//         clientSecret,
//     };

//     return (
//         <div>
//             {error && <div className="error">{error}</div>}
//             {clientSecret && (
//                 <Elements stripe={stripePromise} options={options}>
//                     <CheckoutForm />
//                 </Elements>
//             )}
//         </div>
//     );
// }