import React from 'react'
import '../styles/LandingNav.css'
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
function LandingNav() {
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
        <div className="landingNav">
            <h1 className="brand">Netflix</h1>
            <button className="signInBtn" onClick={signIn}>Sign In with Google</button>

            
        </div>
    )
}

export default LandingNav
