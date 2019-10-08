import React, { useState } from "react";
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
const NavigationBar = props => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => {
    setCollapsed(c => !c);
  };
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
