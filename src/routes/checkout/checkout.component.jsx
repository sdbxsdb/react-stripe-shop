import "./checkout.styles.scss";

import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal, selectCartCount } from '../../store/cart/cart.selector';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="checkout-container">
      {cartItems.length > 0 ? (
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
      ) : (
        <span>Your cart is empty</span>
      )}

      <div className="checkout-items-wrapper">
        <div className="bg-gradient-to-b from-transparent to-white bottom-0 w-full h-[50px] absolute"></div>

        <div className="checkout-items-container pb-[40px]">
          <div className="">
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} cartItem={item} />
            ))}
          </div>
        </div>
      </div>

      {cartItems.length > 0 && (
        <div className="w-full flex flex-col justify-end items-end">
          <span className="">{cartCount} items</span>
          <div className='w-full flex items-center justify-between'>
            <PaymentForm/>
            <span className="total">Total: £{(Math.round(cartTotal * 100) / 100).toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
