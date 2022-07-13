import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found incrememnt quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};



const removeCartItem = (cartItems, cartItemToRemove) => {
  //find if cartItems contains cartItemToRemove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  //return new array with modified cartItems
  return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}



//the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  emptyCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //add up call items in cart
  const totalQuantity = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );

  //get total price
  const totalPrice = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity,
    0
  );

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    emptyCart,
    cartItems,
    totalQuantity,
    totalPrice,
    
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
