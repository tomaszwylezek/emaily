import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        token={token => {
          console.log(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={500}
        name="Emaily"
        description="$5 for 5 email credit"
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
