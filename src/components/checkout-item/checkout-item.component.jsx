import "./checkout-item.styles.scss";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  decreaseItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));

  const decreaseItemFromCartHandler = () =>
    dispatch(decreaseItemFromCart(cartItems, cartItem));
    
  const clearItemFromCartHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="cursor-pointer mr-1"
          onClick={() => decreaseItemFromCartHandler(cartItem)}
        >
          &#10094;
        </span>
        {quantity}
        <span
          className="cursor-pointer ml-2"
          onClick={() => addItemToCartHandler(cartItem)}
        >
          &#10095;
        </span>
      </span>
      <span className="price">£{quantity * price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCartHandler(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
