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
import AllTripsGrid from "../../containers/AllTripsGrid/AllTripsGrid";
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
    if (props.markerState.activeMarker && props.sidebarState.isCollapsed) {
      props.openSidebar("activeMarker");
    }
  }, [props.markerState.activeMarker]);
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
      <Tab id="home" header="My Trips" icon="fa fa-home">
        {props.markerState.markers && <AllTripsGrid trips={props.markerState.markers}/>}
      </Tab>
      <Tab id="activeMarker" header="Current Trip" icon="fa fa-map">
        {props.markerState.activeMarker === null ? null : (
          <CountryInfo countryRef={props.markerState.activeMarker} />
        )}
      </Tab>
      <Tab id="addMarker" header="Drop Pin" icon="fa fa-plus">
        <CreateTrip />
      </Tab>
    </Sidebar>
  );
};

const mapStateToProps = state => {
  return {
    sidebarState: state.sidebarReducer,
    markerState: state.markersReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
