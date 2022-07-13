import './checkout.styles.scss';
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";


const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="">
      <div className="">
        {cartItems.map((item) => (
          <div key={item.id} className='mb-6'>
            <h1>{item.name}</h1>
            <h3> Item price - {item.price}</h3>
            <h3>Qty - {item.quantity}</h3>
            <h3>Total this item - {`${item.quantity}` * `${item.price}`}</h3>
            <span className="mr-6" onClick={() => addItemToCart(item)}>MORE</span>
            <span  onClick={() => removeItemFromCart(item)}>LESS</span>
          </div>
        ))}
      </div>
      <h1>Total - {totalPrice}</h1>
     </div>
  )
}

export default Checkout;