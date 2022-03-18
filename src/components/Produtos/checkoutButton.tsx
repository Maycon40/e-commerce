import React from 'react';
import type { NextPage } from 'next'

import { loadStripe } from '@stripe/stripe-js';

import stripeConfig from '../../config/stripe';

const stripePromise = loadStripe(stripeConfig.publicKey);

interface Props {
    priceId: string;
}

const CheckoutButton: NextPage<Props> = (props) => {
  const handleClick = async () => {
    const stripe: any = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: props.priceId,
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
    });
    
    if(error){
      console.error(error)
    }
  };
  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
};

export default CheckoutButton;