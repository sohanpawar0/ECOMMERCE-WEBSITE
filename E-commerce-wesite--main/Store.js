import React, { Fragment, useContext } from "react";
import classes from "./Store.module.css";
import CartContext from "../Store/Cart-Context";
import Button from "../UI/Button";
import { Link } from "react-router-dom";


const productsArr = [
  {
    id: "p111",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: "p112",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: "p113",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: "p114",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Store = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartClickHandler = (event) => {
    const itemId = event.target.id;
    cartCtx.additem(productsArr.filter((item) => item.id === itemId)[0]);
  };

  const itemList = productsArr.map((item) => {
    return (
      <li className={classes.product} key={item.id}>
        <h1>{item.title}</h1>
        <Link to={`/store/product-details/${item.id}`}>
        <img src={item.imageUrl} alt={item.title}></img>
        </Link>
        <h2>{item.price}</h2>
        <Button id={item.id} onClick={addToCartClickHandler}>
          Add To Cart
        </Button>
      </li>
    );
  });

  return (
    <Fragment>
      <Fragment>
        <p className={classes.heading}>The Generics</p>
        <ul>{itemList}</ul>
        <div className={classes.seeCartBtn}>
          <Button onClick={props.onCartClick}>see the cart</Button>
        </div>
      </Fragment>
    </Fragment>
  );
};
export default Store;