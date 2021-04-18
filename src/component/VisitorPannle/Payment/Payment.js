import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimplePayment from './SimplePayment';
import CodesandBox from './CodesandBox';

const stripePromise = loadStripe('pk_test_51Ie2rSHrD36OpIOzPD1aMmqtuvugFYN9CXCQwwlu407jwD6bHGrqNh4BNhqIRCSgthAbFg2pEixzFuPdHKgnDGep00bfc1ULFk');

const Payment = ({handlePayment, serviceFee}) => {
    return (
        <div>

            <Elements stripe={stripePromise}>
                <SimplePayment handlePayment = {handlePayment} serviceFee = {serviceFee}></SimplePayment>
            </Elements>
        </div>
    );
};

export default Payment;