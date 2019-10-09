import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MapContainer from "./components/Map/Map";
import TripList from "./components/TripList/TripList";
import classes from "./App.module.css";

function App() {
  const [markers, setMarkers] = useState([]);

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => <MapContainer {...props} markers={markers} setMarkers={setMarkers}/>} />
          <Route exact path="/trips" render={props => <TripList markers={markers}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
