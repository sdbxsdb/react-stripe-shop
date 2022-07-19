import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const closeCart = () => setIsCartOpen(false);

  const { cartItems, emptyCart, cartTotal } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      <div
        onClick={closeCart}
        className="z-20 fixed top-0 left-0 h-screen w-screen"
      ></div>

      <div className="cart-dropdown-container">
        {cartItems.length > 0 ? (
          <>
            <div className="w-full relative">
              <div className="bg-gradient-to-b from-transparent to-white bottom-0 w-full h-[50px] absolute"></div>

              <div className="cart-items overflow-scroll">
                {cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
              </div>
            </div>
            <h1 className="w-full text-right font-bold mb-4">
              Total: £{cartTotal}
            </h1>
            <Button onClick={goToCheckoutHandler} buttonType="inverted">
              CHECKOUT
            </Button>
            <small
              onClick={emptyCart}
              className="text-center cursor-pointer mt-1"
            >
              Empty Cart
            </small>
          </>
        ) : (
          <div>
            <span>Your cart is empty</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
