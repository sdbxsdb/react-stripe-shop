import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from "./utils/stripe/stripe.utils";
import { Provider } from "react-redux";
import { store } from './store/store';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
            <CategoriesProvider>
              <Elements stripe={stripePromise}>
                <App />
              </Elements>
            </CategoriesProvider>
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
