import "./cart-item.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  decreaseItemFromCart,
} from "../../store/cart/cart.action";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));

  const decreaseItemFromCartHandler = () =>
    dispatch(decreaseItemFromCart(cartItems, cartItem));
    
  const clearItemFromCartHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));


  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <div className="w-full">
          <h1 className="name">{name}</h1>
          <div className='flex flex-col'>
            <small className="price">{quantity} x £{price}</small>
            <small className="price">Subtotal - £{price * quantity}</small>
          </div>
        </div>
        <div className="absolute flex flex-col-reverse right-0 items-center justify-between pl-4">
          <span className='cursor-pointer' onClick={() => decreaseItemFromCartHandler(cartItem)}>&#8722;</span>
          <span className='cursor-pointer' onClick={() => addItemToCartHandler(cartItem)}>&#43;</span>
          <div className="remove-button cursor-pointer text-red-500" onClick={() => clearItemFromCartHandler(cartItem)}>&#10005;</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
