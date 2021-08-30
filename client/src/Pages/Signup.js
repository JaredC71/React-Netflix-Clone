import React from 'react'
import '../styles/Login.css'

function Signup() {
    return (
        <div className="loginContainer">
        <div className="overlayLogin">
        <h1 className="brand">Netflix</h1>
        <div className="formContainer">
      
            <form>
            <p>Sign Up</p>
                <input type="text" className="input-field" id="username" placeholder="username"></input>
                <input type="password" className="input-field" id="password" placeholder="password"></input>
                <button className="authBtn" type="submit">Create Account</button>
                <a href="/login">Already have an Account?</a>

            </form>
        </div>

        </div>
        
        
        
    </div>
    )
}

export default Signup
