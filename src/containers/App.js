import React, { useState } from "react";
import { AuthProvider } from "../Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import MapContainer from "./Map/Map";

function App() {
  const [markers, setMarkers] = useState([]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
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

            />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
