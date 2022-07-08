import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <div onClick={closeCart} className="z-20 absolute h-screen w-screen"></div>
      <div className="cart-dropdown-container">
        <div className="cart-items" />
        <Button buttonType="inverted">CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropdown;
