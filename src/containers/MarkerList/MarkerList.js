import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setActiveMarker, loadMarkers } from "../../actions/index";
import { Marker } from "react-leaflet";
import LocationIcon from "../../components/LocationIcon/LocationIcon";

const MarkerList = props => {
  useEffect(() => {
    const loadMarkers = async () => {
      props.loadMarkers();
    };
    loadMarkers();
  }, [props.markers]);

  const handleMarkerClick = (e, countryRef) => {
    props.setActiveMarker(countryRef);
  };

  return (
    <>
      <ul>
        {props.markers &&
          props.markers.map((marker, i) => {
            return (
              <Marker
                key={i}
                position={marker.coords}
                icon={LocationIcon}
                onClick={e => handleMarkerClick(e, marker.countryRef)}
              />
            );
          })}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    map: state.mapReducer.map,
    markers: state.markersReducer.markers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveMarker: markerId => {
      dispatch(setActiveMarker(markerId));
    },
    loadMarkers: () => {
      dispatch(loadMarkers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkerList);
