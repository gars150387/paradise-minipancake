import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ParadiseMinniApi } from "../api/ParadiseMinniApi";
import { PaymentElement } from "../stripe/PaymentElement";
import "../style/checkout.css";
import { DeliveryAddress } from "./DeliveryAddress";

export const Checkout = ({ itemToOrder }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [dispatched, setDispatched] = useState(false);

  const amount = itemToOrder?.price;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    ParadiseMinniApi.post("/create-payment-intent", {
      amount: amount
    });
  }, []);
  const handlePaymentIntent = async () => {};
  return (
    <div
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        padding: "20px",
        minHeight: "80vh"
      }}
    >
        <Link to='/'>
        <div className="logo">
          <img src={require("../images/logo-no-background.jpeg")} alt="logo" />
        </div>
      </Link>
      <div>
        <DeliveryAddress />
      </div>
      <button onClick={handlePaymentIntent}>Placed Order</button>
      <div style={{ display: `${dispatched === false ? "none" : "auto"}` }}>
        <PaymentElement clientSecret={clientSecret} />
      </div>
    </div>
  );
};
