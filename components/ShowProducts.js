import React ,{ useContext } from 'react'
import CartContext from '../Store/Cart-Context';
import classes from './ShowProdcut.module.css'
import Button from '../UI/Button';


const ShowProducts = (props) => {

    const cartCtx = useContext(CartContext);


  const addToCartHandler = () => {
    console.log(props);
    cartCtx.additem({
      id: props.id,
      title: props.title,
      price: props.price,
    });
  };

  return (
      <li className={classes.product} key={props.id}>
        <h1>{props.title}</h1>
        <img src={props.imageUrl} alt={props.title}></img>
        <h2>{props.price}</h2>
        <Button id={props.id} onClick={addToCartHandler}>Add To Cart</Button>
      </li>
      
  )
}

export default ShowProducts;