import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Qjra5B7DxHdGWiwfyQhISENXUop1tpRdQAHmsweNpiRwVLEjbvziakRPQvBuJiaRGyfjy6pXOXgHagmwFbGzY0900WsSoCKUi');

const CheckOut = () => {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        //*/
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1Qjs97B7DxHdGWiwV7H0w9Pt', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'https://example.com/success',
            cancelUrl: 'https://example.com/cancel',
        });
        //*/
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    };
    return (
        <div>
            <button role="link" onClick={handleClick}>
                Checkout
            </button>
        </div>
    );
};

export default CheckOut;