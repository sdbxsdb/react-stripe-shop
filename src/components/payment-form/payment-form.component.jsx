import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../store/cart/cart.action';



const PaymentForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  const emptyCartHandler = () =>
  dispatch(emptyCart(cartItems));

  const payee = currentUser ? currentUser.email : "Non-registered user";
  const cartTotalFixedTwo = Math.round(cartTotal * 100);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe or elements are not loaded yet");
      return;
    }

    setIsProcessingPayment(true);

    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotalFixedTwo }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = res;

    // console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: payee,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setShowThankYou(true);
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <Button className='mt-2' isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>

        {showThankYou && (
          <div className="absolute backdrop-blur-md z-100 flex flex-col items-center justify-center top-0 left-0 w-screen h-screen bg-white bg-opacity-30 ">
            <h1>Thank you!</h1>
            <br />
            <h1>You're order has been recieved!</h1>
            <a href="/" onClick={()=> emptyCartHandler(cartItems)}>Continue Shopping</a>
          </div>
        )}
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
