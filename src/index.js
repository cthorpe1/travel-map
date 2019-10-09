import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./index.css";
import App from "./App";
import * as firebase from "firebase/app";
import * as serviceWorker from "./serviceWorker";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_TOKEN}`,
  authDomain: "travelmap-2955a.firebaseapp.com",
  databaseURL: "https://travelmap-2955a.firebaseio.com",
  projectId: "travelmap-2955a",
  storageBucket: "",
  messagingSenderId: "126493888147",
  appId: "1:126493888147:web:a4a8121a8db26861cd4766"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
