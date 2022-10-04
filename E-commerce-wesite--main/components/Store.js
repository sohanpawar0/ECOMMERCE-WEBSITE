import React, { Fragment, useContext } from "react";
import classes from "./Store.module.css";
import CartContext from "../Store/Cart-Context";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import AuthContext from "../Store/auth-context";

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
  const authCtx =useContext(AuthContext)

  const cleanEmail = authCtx.email.replace(/[^a-zA-Z0-9]/g, "");

  const addToCartClickHandler = (event) => {
    const itemId = event.target.id;
    const item = productsArr.filter((item) => item.id === itemId)[0]
    cartCtx.additem(item);
    postToCrudCrud(item);
  };

  const cartOpenHandler = () => {
    cartCtx.openCart();
    getFromCrudCrud();
  };
   
 

 

  const getFromCrudCrud = async () => {
    const crudURL = `https://crudcrud.com/api/8900cb340d0f40d3bad45362e92163d8/${cleanEmail}`;
    try {
      const response = await fetch(crudURL)
      const data = await response.json();
      const gotData = data.map(item=>item.items);
      console.log(gotData);
      cartCtx.loadItems(gotData);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  const postToCrudCrud = async (item) => {
    const crudURL = `https://crudcrud.com/api/8900cb340d0f40d3bad45362e92163d8/${cleanEmail}`;
    try {
      const response = await fetch(crudURL, {
        method: "POST",
        body: JSON.stringify({
          items: item,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
        {cartCtx.isCartOpen && <Cart/>}
        <p className={classes.heading}>The Generics</p>
        <ul>{itemList}</ul>
        <div className={classes.seeCartBtn}>
          <Button onClick={cartOpenHandler}>see the cart</Button>
        </div>
        <div className={classes.cart}>
          <Button onClick={cartOpenHandler}>Cart</Button>
          <div className={classes.cartItemsNum}>{cartCtx.items.reduce((p,c)=>p+c.quantity,0)}</div>
        </div>
      </Fragment>
  );
};

export default Store;