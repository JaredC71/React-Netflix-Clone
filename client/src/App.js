import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import React, { useState } from "react";
import "./styles/App.css";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Browse from "./Pages/Browse";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <>
        <Landing />
        </>
      ) : (
        <div className="App_Body">
         
          <Browse />
        </div>
      )}
    </div>
  );
}

export default App;
