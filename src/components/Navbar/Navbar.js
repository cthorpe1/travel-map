import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../../Auth";
import * as firebase from "firebase/app";
import "firebase/auth";
const NavigationBar = props => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => {
    setCollapsed(c => !c);
  };
  const logout = () => {
    firebase.auth().signOut();
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TravelMap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RouterLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/trips">
                My Trips
              </NavLink>
            </NavItem>
            {currentUser ? (
              <NavItem>
                <NavLink  tag={RouterLink} to="" onClick={logout}>Logout</NavLink>
              </NavItem>
            ) : null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
