import React, { useState, useEffect } from "react";
import { Sidebar, Tab } from "react-leaflet-sidebarv2";
import CreateTrip from "../CreateTrip/CreateTrip";
const SideBar = props => {
  const [collapsed, setCollapsed] = useState(true);
  const [selected, setSelected] = useState("home");
  const onClose = () => {
    setCollapsed(true);
    props.setSideDrawerContent(null);
    props.resetZoom();
  };
  const onOpen = id => {
    setCollapsed(false);
    setSelected(id);
  };

  useEffect(() => {
    if (props.content !== null) {
      setCollapsed(false);
      setSelected("home");
    }
  },[setCollapsed, props.content]);
  return (
    <Sidebar
      id="sidebar"
      collapsed={collapsed}
      selected={selected}
      onOpen={onOpen}
      onClose={onClose}
      closeIcon="fa fa-times"
      position="right"
    >
      <Tab id="home" header="Travel Map Menu" icon="fa fa-home">
        {props.content}
      </Tab>
      <Tab id="settings" header="Drop Pin" icon="fa fa-plus">
        <CreateTrip markers={props.markers} setMarkers={props.setMarkers} />
      </Tab>
    </Sidebar>
  );
};

export default SideBar;
