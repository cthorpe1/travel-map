import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { getMarkersFromDB } from "../../helpers/helpers";
import LocationIcon from "../LocationIcon/LocationIcon";
import Sidebar from "../SideBar/SideBar";
import CountryInfo from "../CountryInfo/CountryInfo";
import countries from "../../countries.json";
import classes from "./Map.module.css";
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
  // const [markers, setMarkers] = useState([]);
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

  //Effect to set map reference and populate country marker on component mount
  useEffect(() => {
    setMap(mapInstance.leafletElement);
    const getMarkers = async () => {
      let markersRef = await getMarkersFromDB();
      let markerList = [];
      markersRef.forEach(marker => {
        markerList.push(marker.data());
      });
      props.setMarkers(prev => markerList);
    };
    getMarkers();
  }, [props.markers]);

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
        {props.markers.map((marker, i) => {
          return (
            <Marker
              key={i}
              position={marker.coords}
              icon={LocationIcon}
              onClick={handleMarkerClick}
            ></Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default MapContainer;
