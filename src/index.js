import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {store} from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./index.css";
import App from "./containers/App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"));
