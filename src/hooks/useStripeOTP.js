import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Qjra5B7DxHdGWiwfyQhISENXUop1tpRdQAHmsweNpiRwVLEjbvziakRPQvBuJiaRGyfjy6pXOXgHagmwFbGzY0900WsSoCKUi');

const useStripeOTP = () => {

    const oneTimePayment = async (priceID, cancelURL, quantity=1) => {
        
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: priceID,
                quantity: Number(quantity),
            }],
            mode: 'payment',
            successUrl: 'http://localhost:5173/#/payment-summary',
            cancelUrl: cancelURL,
        });
    };

    return { oneTimePayment };
};

export default useStripeOTP;