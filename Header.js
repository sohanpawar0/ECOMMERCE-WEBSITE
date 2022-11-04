import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
const Header = (props) => {

  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.linkCase}>
          <div>Home</div>
          <div>Store</div>
          <div>About</div>
        </div>
        <div className={classes.cartCase}>
            <Button onClick={props.onCartClick}>Cart</Button>
          <div className={classes.cartItemsNum}>0</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;