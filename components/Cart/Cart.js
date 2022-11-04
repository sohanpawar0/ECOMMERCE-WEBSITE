import React, { Fragment, useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import Button from '../../UI/Button';
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const removeProductHandler = (event) => {
    const itemId = event.target.id;
    cartCtx.removeItem(itemId);
  };

  const purchaseClickHandler = () => {
    cartCtx.emptyCart();
    alert("Thank you for shoping with us");
  };

  const cartItems = (
    <Fragment>
      <ul className={classes.cartList}>
        {cartCtx.items.map((product) => {
          return (
            <li key={product.id} className={classes.cartItems}>
              <img alt={product.title} width={50} src={product.imageUrl}></img>
              <h3>{`${product.title}  - Rs. ${product.price}`}</h3>
              <h4>{`Quantity ${product.quantity}`}</h4>
              <button
                className={classes.removeBtn}
                id={product.id}
                onClick={removeProductHandler}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <h1>
        Total Amount:{" "}
        {`${cartCtx.items.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0)} Rs.`}
      </h1>
    </Fragment>
  );

  const cartCloseHandler = () => {
    cartCtx.closeCart();
  }

  return (
    <div className={classes.cartContainer}>
      <h1>Your Cart</h1>
      <div className={classes.closeBtnDiv}>
        <Button onClick={cartCloseHandler}>Close</Button>
      </div>
      {cartItems}
      <Button onClick={purchaseClickHandler}>Purchase</Button>
    </div>
  );
};
export default Cart;