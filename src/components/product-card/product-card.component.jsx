import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { setIsCartOpen } from '../../store/cart/cart.action';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(setIsCartOpen(true))
    dispatch(addItemToCart(cartItems, product))
  };
  

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">£{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.invetered}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
