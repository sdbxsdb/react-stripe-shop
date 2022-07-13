import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { addItemToCart, decreaseItemFromCart, clearItemFromCart } = useContext(CartContext);

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
          <span className='cursor-pointer' onClick={() => decreaseItemFromCart(cartItem)}>&#8722;</span>
          <span className='cursor-pointer' onClick={() => addItemToCart(cartItem)}>&#43;</span>
          <div className="remove-button cursor-pointer text-red-500" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
