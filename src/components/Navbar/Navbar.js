import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import classes from "./Navbar.module.css";
const NavigationBar = () => {
  const logout = () => {
    firebase.auth().signOut();
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className={classes.Nav}>
      <div className={classes.Logo}>
        <h1>Travel Map</h1>
      </div>
      <div className={classes.Links}>
        <Link to="/" className={classes.Link}>
          Home
        </Link>
        {currentUser ? (
          <Link to="" onClick={logout} className={classes.Link}>
            Logout
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default NavigationBar;
