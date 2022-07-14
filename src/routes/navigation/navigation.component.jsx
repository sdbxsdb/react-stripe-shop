import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const singOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>

          <LogoContainer to="/">
            <Logo className="logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">
              SHOP
            </NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={singOutHandler}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">
                SIGN IN
              </NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}

      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
