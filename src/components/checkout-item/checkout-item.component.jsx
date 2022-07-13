import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className='cursor-pointer' onClick={() => removeItemFromCart(cartItem)}>&#10094;</span>
        {quantity} 
        <span className='cursor-pointer' onClick={() => addItemToCart(cartItem)}>&#10095;</span>
      </span>
      <span className="price">£{quantity * price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
