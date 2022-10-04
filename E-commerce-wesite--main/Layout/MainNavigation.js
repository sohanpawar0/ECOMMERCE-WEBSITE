import { Link  } from 'react-router-dom';
import { useNavigationType } from 'react-router-dom';
import { useContext  } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const ctx= useContext(AuthContext)
  let login=ctx.isLoggedIn
 const histroy =useNavigationType()
  const logouthandler = () => {
    
      ctx.logout()
      ctx.token=null;
      history.replace('/auth');
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
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
    </header>
  );
};

export default MainNavigation;
