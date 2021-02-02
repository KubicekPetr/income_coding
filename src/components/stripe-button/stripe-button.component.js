import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51IGUcWISQ8zsYD95TfCdVc888MOUg2DR4NWX2Hq4TyooMTepVcAhWJCtAwyVUmweMbavv1pA2Gl4ApRziNwGcvDf00ikCQqwZH';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label='Pay now'
        panelLabel='Pay now'
        name='Income Coding'
        description={`Your total is ${price}$`}
        billingAddress
        shippingAddress
        amount={priceInCents}
        stripeKey={publishableKey}
        token={onToken}
        />
    );
};

export default StripeButton;