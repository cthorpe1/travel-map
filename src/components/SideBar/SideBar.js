import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  openSidebar,
  closeSidebar,
  setActiveMarker
} from "../../actions/index";
import { Sidebar, Tab } from "react-leaflet-sidebarv2";
import CountryInfo from "../CountryInfo/CountryInfo";
import CreateTrip from "../CreateTrip/CreateTrip";
const SideBar = props => {
  const onClose = () => {
    resetZoomOnSidebarClose();
    props.closeSidebar();
    props.clearActiveMarker();
  };
  const onOpen = id => {
    props.openSidebar(id);
  };
  const resetZoomOnSidebarClose = () => {
    props.mapState.map.flyTo(props.mapState.position, props.mapState.zoom);
  };

  useEffect(() => {
    if (props.activeMarker) {
      props.openSidebar("activeMarker");
    }
  }, [props.activeMarker]);
  return (
    <Sidebar
      id="sidebar"
      collapsed={props.sidebarState.isCollapsed}
      selected={props.sidebarState.selectedTab}
      onOpen={onOpen}
      onClose={onClose}
      closeIcon="fa fa-times"
      position="right"
    >
      <Tab id="home" header="Travel Map Menu" icon="fa fa-home">
        {/* //List All Trips */}
        {/* {props.content} */}
      </Tab>
      <Tab id="activeMarker" header="Current Trip" icon="fa fa-map">
        {/* <CountryInfo country={props.activeMarker} /> */}
      </Tab>
      <Tab id="addMarker" header="Drop Pin" icon="fa fa-plus">
        <CreateTrip markers={props.markers} setMarkers={props.setMarkers} />
      </Tab>
    </Sidebar>
  );
};

const mapStateToProps = state => {
  return {
    sidebarState: state.sidebarReducer,
    activeMarker: state.markersReducer.activeMarker,
    mapState: state.mapReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSidebar: selectedTab => {
      dispatch(openSidebar(selectedTab));
    },
    closeSidebar: () => {
      dispatch(closeSidebar());
    },
    clearActiveMarker: () => {
      dispatch(setActiveMarker(null));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
