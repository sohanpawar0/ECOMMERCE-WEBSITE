import classes from './ProfileForm.module.css';
import React ,{ useContext ,useRef } from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigationType } from 'react-router-dom';

const ProfileForm = (props) => {

  const ctx = useContext(AuthContext)
  const Histroy =useNavigationType()
  const passwordInputRef = useRef();
  const idtoken=ctx.token
 const submithandler = (event) =>{
  event.preventDefault();

  const enteredPassword = passwordInputRef.current.value;

   fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDJzFGMehDL_Sv8YBjxCcs1Ox2VjgMBPG4`,
   {
    method:'POST',
    body:JSON.stringify({
      idToken:idtoken,
      password:enteredPassword,
      returnSecureToken: true,
    })
   }).then (res => {
    console.log(res)
    console.log("sucessful");
    Histroy.replace('/');
   })
 }

  
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref ={passwordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
