import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [showUsername, setShowusername] = useState(false);

  const handleMouseOver = () => {
    setShowusername(true);
  };
  const handleMouseOut = () => {
    setShowusername(false);
  };

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
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink className="relative" as="span" onClick={singOutHandler}>
              
              <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>SIGN OUT</span>
              
              { showUsername === true ? (
                <small className="absolute p-2 border bg-white z-50 -top-8 left-1/2 transform -translate-x-1/2">
                {currentUser.email}
              </small>
              ) : null}
              
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
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
