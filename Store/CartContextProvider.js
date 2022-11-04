import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsopen, setCartIsOpen] = useState(false);

  const addItemToCartHandler = (item) => {
    // find the object in the cartItems array witch is similar to this item
    // const isThere = cartItems.find((element) => {
    //   if (element.id === item.id) return true;
    //   return false;
    // });
    // if (isThere) {
    //   item.quantity += 1;
    //   setCartItems((olditems) => [...olditems.filter(el => el.id !== item.id), item]);
    //   // alert("Item is already in the cart");
    // } else {
    //   setCartItems((olditems) => [...olditems, item]);
    // }
    setCartItems([...cartItems,item])
  };

  const removeItemFromCartHandler = (itemId) => {
    setCartItems((olditems) => olditems.filter((item) => item.id !== itemId));
  };
  const removeAllFromCartHandler = () => {
    setCartItems([]);
  }

  const openCartHandler = () => {
    setCartIsOpen(true);
  }
  const closeCartHandler = ()=>{
    setCartIsOpen(false);
  }
  const loadItemsHandler = (items) => {
    setCartItems(items);
  }
  const cartContext = {
    items: cartItems,
    additem: addItemToCartHandler,
    removeitem: removeItemFromCartHandler,
    emptyCart: removeAllFromCartHandler,
    loadItems: loadItemsHandler,
    openCart: openCartHandler,
    closeCart: closeCartHandler,
    isCartOpen: cartIsopen,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;