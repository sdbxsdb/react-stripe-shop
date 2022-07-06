import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser?.email);
  const email = currentUser?.email;

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {!email && (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          {email && (
            <Link className="nav-link" to="/auth">
              SIGN OUT
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
