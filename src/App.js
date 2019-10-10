import React, { useState } from "react";
import { AuthProvider } from "./Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import MapContainer from "./components/Map/Map";
import TripList from "./components/TripList/TripList";
import classes from "./App.module.css";

function App() {
  const [markers, setMarkers] = useState([]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className={classes.App}>
          <Navbar />
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={MapContainer}
              markers={markers}
              setMarkers={setMarkers}
            />
            )} />
            <PrivateRoute
              exact
              path="/trips"
              component={TripList}
              markers={markers}
            />
            />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
