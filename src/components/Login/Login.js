import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import classes from "./Login.module.css";
const Login = () => {
  const handleLogin = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.auth().signInWithEmailAndPassword(email.value, password.value);
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.LoginContainer}>
      <h2>Please Login</h2>
      <form onSubmit={handleLogin}>
        <div className={classes.Group}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div className={classes.Group}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
