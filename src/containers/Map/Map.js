import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initMap } from "../../actions/index";
import { Map, TileLayer } from "react-leaflet";
import Sidebar from "../../components/SideBar/SideBar";
import MarkerList from "../MarkerList/MarkerList";
import classes from "./Map.module.css";

const MapContainer = props => {
  const MAPBOX_URL = `https://api.mapbox.com/styles/v1/cthorpe4/ck18dwcl84w1l1dqturfu8dfw/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

  let mapInstance;

  // Effect to set map reference on component mount
  useEffect(() => {
    console.log("firing");
    props.initMap(mapInstance);
  }, []);

  return (
    <div className={classes.MapContainer}>
      <Sidebar />
      <Map
        center={props.mapState.position}
        zoom={props.mapState.zoom}
        minZoom={3}
        zoomSnap={1}
        wheelPxPerZoomLevel={80}
        zoomDelta={0.5}
        className={classes.Map}
        ref={e => (mapInstance = e)}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors: Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
          url={MAPBOX_URL}
        />
        <MarkerList />
      </Map>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mapState: state.mapReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initMap: mapInstance => {
      dispatch(initMap(mapInstance));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
