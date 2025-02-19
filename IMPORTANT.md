# IMPORTANT README

## Important For Setup:

The code that is pushed to this branch contains none of the keys and ids for Stripe to work.
Follow the instructions below to set up Stripe.

## Steps for Setup:

- Create & setup your Stripe account, this will allow you to have a public key

- Create products on your Stripe account this will allow you to your `productID`s and `priceID`s

- In VS Code, globally search "`INSERT:`", this will show you the following:
    - `INSERT:price` : Manually add the prices to match what you have on Stripe
    - `INSERT:paymentlink` : Manually add the paymentlink you have made on Stripe
    - `INSERT:yourProductID` : The ProductID can be accessed by clicking on the Products you made (every product has their own unique productID)
- Once you complete replace/change all the `INSERT:`s, the code should work as intended.