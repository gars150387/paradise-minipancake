import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./paymentElement.css";

const stripePromise = loadStripe("pk_live_51LOVwRD3lviUp8QG4qgIUNJDavrdyw7ogCvtkUI3msOAE6ROfxp3IdHOOFX174lkcSDTSf007a56oT4RewUoNcOK00GqvBdRo9");

export const PaymentElement = ({clientSecret}) => {

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}