import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimplePayment = ({ handlePayment , serviceFee}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            console.log(error);
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id);
            console.log('[PaymentMethod]', paymentMethod);
            handlePayment(paymentMethod.id)
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentError(null)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-success" type="submit" disabled={!stripe}>
                    Pay <span style={{color: 'orange', fontWeight: '500'}}>${serviceFee}</span>
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful . and your id {paymentSuccess}</p>
            }
        </div>
    );
};

export default SimplePayment;