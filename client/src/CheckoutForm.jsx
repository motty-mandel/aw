import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/',
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement onReady={() => console.log('PaymentElement [ready]')}
                      onChange={(event) => console.log('PaymentElement [change]', event)}
                      onBlur={() => console.log('PaymentElement [blur]')}
                      onFocus={() => console.log('PaymentElement [focus]')}
                      onError={(error) => setErrorMessage(error.message)} />
      <button disabled={!stripe}>Submit</button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;