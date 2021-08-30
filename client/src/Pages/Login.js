import React from 'react'
import '../styles/Login.css'

import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
function Login() {
    const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log(error.message));
  };
    return (
        <div className="loginContainer">
            <div className="overlayLogin">
            <h1 className="brand">Netflix</h1>
            <div className="formContainer">
          
                <div className="form">
                <p>Sign In</p>
                    {/* <input type="text" className="input-field" id="username" placeholder="username"></input>
                    <input type="password" className="input-field" id="password" placeholder="password"></input> */}
                    <button className="authBtn" onClick={signIn}>Sign In with Google</button>
                    {/* <a href="/signup">New to Netflix? Sign up Now</a> */}

                </div>
            </div>

            </div>
            
            
            
        </div>
    )
}

export default Login
