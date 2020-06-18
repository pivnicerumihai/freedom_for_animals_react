import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useSelector} from "react-redux";

const StripeButton = () => {

    const publishableKey = "pk_test_N2WSTZcl0wggHGlMy8uK1a8V00fXwwncQD";
    const price = useSelector(state=>state.shop.totalPrice)

    const onToken = (token) =>{
        console.log(token);
        alert("Payment Successful")
    }
    return (
        


       <StripeCheckout
       label = "Pay Now"
       name = "Freedom for Animals"
       billingAddress
       shippingAddress
        description={`Your total is ${price}`}
        amount = {price}
        panelLabel="Pay Now"
        token = {onToken}
        stripeKey= {publishableKey}
       />   
    )

}

export default StripeButton;