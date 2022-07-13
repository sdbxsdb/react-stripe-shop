import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const closeCart = () => setIsCartOpen(false);

  const { cartItems, emptyCart, totalPrice } = useContext(CartContext);


  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      <div
        onClick={closeCart}
        className="z-20 absolute h-screen w-screen"
      ></div>

      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <h1>Total - {totalPrice}</h1>
        <Button onClick={goToCheckoutHandler} buttonType="inverted">
          CHECKOUT
        </Button>
        <small onClick={emptyCart} className="text-center cursor-pointer mt-1">
          Empty Cart
        </small>
      </div>
    </>
  );
};

export default CartDropdown;
