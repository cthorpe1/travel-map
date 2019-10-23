import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Map, TileLayer } from "react-leaflet";
import Sidebar from "../../components/SideBar/SideBar";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import MarkerList from "./MarkerList/MarkerList";
import { findCountryByCoords } from "../../helpers/helpers";
import classes from "./Map.module.css";

const MapContainer = props => {
  const MAPBOX_URL = `https://api.mapbox.com/styles/v1/cthorpe4/ck18dwcl84w1l1dqturfu8dfw/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
  //Component State
  const [sideDrawerContent, setSideDrawerContent] = useState(null);
  let mapInstance;
  //Handlers
  const handleMarkerClick = async e => {
    let clickedCountryCoords = Object.values(e.target._latlng);
    let foundCountry;
    findCountryByCoords(clickedCountryCoords)
      .then(snap => {
        snap.forEach(doc => (foundCountry = doc.data()));
      })
      .then(() => {
        if (foundCountry.bounds.length === 0) {
          props.mapState.map.flyTo(foundCountry.latlng, 7);
        } else {
          props.mapState.map.flyToBounds([
            [foundCountry.bounds[1], foundCountry.bounds[0]],
            [foundCountry.bounds[3], foundCountry.bounds[2]]
          ]);
        }
        setSideDrawerContent(
          <CountryInfo
            data={foundCountry}
            setSideDrawerContent={setSideDrawerContent}
          />
        );
      });
  };
  const resetZoomOnSidebarClose = () => {
    props.mapState.map.flyTo(props.mapState.position, props.mapState.zoom);
  };

  // Effect to set map reference on component mount
  useEffect(() => {
    console.log("firing");
    props.initMap(mapInstance);
  }, []);

  return (
    <div className={classes.MapContainer}>
      <Sidebar
        content={sideDrawerContent}
        setSideDrawerContent={setSideDrawerContent}
        markers={props.markers}
        setMarkers={props.setMarkers}
        resetZoom={resetZoomOnSidebarClose}
      />
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
        <MarkerList handleMarkerClick={handleMarkerClick} />
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
      dispatch({
        type: "INIT_MAP",
        payload: mapInstance.leafletElement
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
