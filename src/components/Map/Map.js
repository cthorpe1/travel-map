import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import Sidebar from "../SideBar/SideBar";
import CountryInfo from "../CountryInfo/CountryInfo";
import countries from "../../countries.json";
import classes from "./Map.module.css";
import MarkerList from "../Map/MarkerList/MarkerList";
const MapContainer = props => {
  //Default Map Values and Constants
  const DEFAULT_MAP_CENTER = {
    lat: "42.452416",
    lng: "-30.035798"
  };
  const DEFAULT_ZOOM = 3;
  const MAPBOX_URL = `https://api.mapbox.com/styles/v1/cthorpe4/ck18dwcl84w1l1dqturfu8dfw/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
  //Component State
  const [map, setMap] = useState();
  const [sideDrawerContent, setSideDrawerContent] = useState(null);
  let mapInstance;
  //Handlers
  const handleMarkerClick = e => {
    let filteredCountry = countries.filter(country => {
      return (
        country.latlng[0] === e.target._latlng.lat &&
        country.latlng[1] === e.target._latlng.lng
      );
    });
    const countryInfo = filteredCountry[0];
    const boundsData = countryInfo.bounds;
    if (boundsData.length === 0) {
      map.flyTo(countryInfo.latlng, 7);
    } else {
      const bounds = [
        [boundsData[1], boundsData[0]],
        [boundsData[3], boundsData[2]]
      ];
      map.flyToBounds(bounds);
    }
    setSideDrawerContent(<CountryInfo data={countryInfo} />);
  };
  const resetZoomOnSidebarClose = () => {
    map.flyTo(DEFAULT_MAP_CENTER, DEFAULT_ZOOM);
  };

  // Effect to set map reference and populate country marker on component mount
  useEffect(() => {
    console.log("firing");
    setMap(mapInstance.leafletElement);
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
        center={DEFAULT_MAP_CENTER}
        zoom={DEFAULT_ZOOM}
        minZoom={DEFAULT_ZOOM}
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

export default MapContainer;
