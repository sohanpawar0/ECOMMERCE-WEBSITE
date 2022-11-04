import { Navigate ,Route ,Routes } from "react-router-dom";

import { Fragment, useState , Switch ,useContext } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "../src/Store/CartContextProvider";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import ProductDetails from './components/ProductDetails'
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './components/pages/AuthPage';
import AuthContext from "./Store/auth-context";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const authctx =useContext(AuthContext)

  const cartClickHandler = () => {
    setCartIsOpen(true);
  };
  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };
  return (
    <Fragment>
      <Header onCartClick={cartClickHandler} />


 
     
      <Routes>
        <Route path='/' exact
           element ={<HomePage />}
        />
        { !authctx.isLoggedIn && <Route path='/auth' element ={<AuthPage />} /> }
        
        { authctx.isLoggedIn && <Route path='/profile' element ={<UserProfile />} /> }
        { !authctx.isLoggedIn && <Route path='/auth' element ={<AuthPage />} /> }



      
      <Route  exact path="/Store" 
      element={<CartContextProvider>
        {cartIsOpen && <Cart onClose={cartCloseHandler} />}
        <Store onCartClick={cartClickHandler} />
        <Footer />
      </CartContextProvider>}
       />

       <Route path='/login' element={ !authctx.isLoggedIn && <Navigate to='/login' />} />
          // {}
      <Route  path="/HomePage" 
      element={<HomePage />}
       />
        
        <Route  path="/About" 
      element={<AboutPage />}
       />

      <Route  path="/contact" 
      element={<ContactUs />}
       />
    
    <Route path="/store/product-details/:productId" exact
      element={<ProductDetails />}
     />
      </Routes>




      {/* <Route path="/store">
        <CartContextProvider>
          {cartIsOpen && <Cart onClose={cartCloseHandler} />}
          <Store onCartClick={cartClickHandler} />
        </CartContextProvider>
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route> */}
      <Footer />
    </Fragment>
  );
}
export default App;