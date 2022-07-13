import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";




const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { addItemToCart, removeItemFromCart } = useContext(CartContext);




  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x £{price}
        </span>
        <h1 onClick={() => addItemToCart(cartItem)}>MORE</h1>
        <h1 onClick={() => removeItemFromCart(cartItem)}>LESS</h1>
        <h1>Subtotal - {quantity * price}</h1>
      </div>
      
    </div>
  );
};

export default CartItem;
