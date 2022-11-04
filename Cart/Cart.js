import React, { Fragment, useState } from "react";
import Button from "../../UI/Button";
import classes from "./Cart.module.css";

const productsInCart = [
  {
    id: "p111",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: "p112",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: "p113",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

let totalAmount = 0;

const Cart = (props) => {
  const [products, setProducts] = useState(productsInCart);

  const removeProductHandler = (event) => {
    const itemId = event.target.id;
    setProducts((oldProd) => {
      return oldProd.filter((item) => item.id !== itemId);
    });
  };

  const cartItems = (
    <Fragment>
      <ul className={classes.cartList}>
        <p>{totalAmount=0}</p>
        {products.map((product) => {
          totalAmount += product.price * product.quantity;
          return (
            <li key={product.id} className={classes.cartItems}>
              <img alt={product.title} width={50} src={product.imageUrl}></img>
              <h3>{`${product.title}  - Rs. ${product.price}`}</h3>
              <p>{product.quantity}</p>
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
      <h1>Total Amount: {`${totalAmount} Rs.`}</h1>
    </Fragment>
  );
  return (
    <div className={classes.cartContainer}>
      <h1>Your Cart</h1>
      <div className={classes.closeBtnDiv}>
        <Button onClick={props.onClose}>Close</Button>
      </div>
      {cartItems}
      <Button>Purchase</Button>
    </div>
  );
};

export default Cart;