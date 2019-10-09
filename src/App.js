import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MapContainer from "./components/Map/Map";
import TripList from "./components/TripList/TripList";
import classes from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => <MapContainer {...props} />} />
          <Route exact path="/trips" component={TripList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
