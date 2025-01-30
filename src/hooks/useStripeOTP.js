import { loadStripe } from '@stripe/stripe-js';

//client must set up their own stripe to use this

const stripePromise = loadStripe(/*Insert public key here*/'pk_test_51Qjra5B7DxHdGWiwfyQhISENXUop1tpRdQAHmsweNpiRwVLEjbvziakRPQvBuJiaRGyfjy6pXOXgHagmwFbGzY0900WsSoCKUi');
const siteUrl = 'http://localhost:5173'

const useStripeOTP = () => {

    const oneTimePayment = async (priceID, cancelURL, quantity=1) => {
        
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: priceID,
                quantity: Number(quantity),
            }],
            mode: 'payment',
            successUrl: siteUrl+'/#/order-complete',
            cancelUrl: cancelURL,
        });
    };

    return { oneTimePayment };
};

export default useStripeOTP;