import React from "react";

const CartContext = React.createContext({
    items: [],
    additem: (item) => {},
    removeitem: (id) => {},
    loadItems: () => {},
    emptyCart: ()=>{},
    openCart: ()=>{},
    closeCart: ()=>{},
    isCartOpen: false,
});

export default CartContext;