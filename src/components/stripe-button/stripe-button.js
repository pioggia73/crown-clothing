import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_5NOC7Ch4ON5b3rEy49qihe1400VYIql7IN';

   const onToken = token => {
      console.log(token)
      alert ('Payment successful')
   };

   return (
     <StripeCheckout
         label="Pay now"
         name="Crown-Clothing Ltd."
         billingAddress
         shippingAddress
         image="https://sendeyo.com/up/d/f3eb2117da"
         description = {`Your total is $ ${price}`}
         amount = {priceForStripe}
         panelLabel = 'Pay Now'
         token = {onToken}
         stripeKey = {publishableKey}
     />
   );

};

export default StripeCheckoutButton;