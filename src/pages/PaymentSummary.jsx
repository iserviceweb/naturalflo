import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Qjra5B7DxHdGWiwfyQhISENXUop1tpRdQAHmsweNpiRwVLEjbvziakRPQvBuJiaRGyfjy6pXOXgHagmwFbGzY0900WsSoCKUi');

const PaymentSummary = () => {
    const handleClick = async (event) => {

    };
    return (
        <div>
            <button onClick={handleClick}>
                Back
            </button>
        </div>
    );
};

export default PaymentSummary;