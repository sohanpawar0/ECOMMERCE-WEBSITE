import React, { Fragment, useContext } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import CartContext from "../Store/Cart-Context";
import { NavLink ,useNavigationType ,Link} from "react-router-dom";
import AuthForm from "./Auth/AuthForm";
import AuthContext from "../Store/auth-context";
import Layout from "./Layout/Layout";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  // const authctx =useContext(AuthContext)

  let numberOfCartItems =cartCtx.items.length

  const ctx= useContext(AuthContext)
  let login=ctx.isLoggedIn
 const histroy =useNavigationType()
  const logouthandler = () => {
    
      ctx.logout()
      ctx.token=null;
      histroy.replace('/auth');
  }
  console.log(cartCtx.items);
  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.linkCase}>
          <div>
            <NavLink activeclassname={classes.active} to={"/HomePage"}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink activeclassname={classes.active} to={"/Store"}>
              Store
            </NavLink>
          </div>
          <div>
            <NavLink activeclassname={classes.active} to={"/About"}>
              About
            </NavLink>
          </div>
          <div>
            <NavLink activeClassname={classes.active} to={"/contact"}>
              Contact Us
            </NavLink>
          </div>

      <nav>
        <ul>
          <li>
           {!login && <Link to='/auth'>Login</Link>} 
          </li>
          <li>
           {login &&  <Link to='/profile'>Profile</Link>} 

           
          </li>
          <li>
           {login &&  <button onClick={logouthandler}>Logout</button>} 
            
            
          </li>
        </ul>
      </nav>
         
        </div>
        <div className={classes.cartCase}>
          <Button onClick={props.onCartClick}>Cart</Button>
          <div className={classes.cartItemsNum}>{numberOfCartItems}</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;