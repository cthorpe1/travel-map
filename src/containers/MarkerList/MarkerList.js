import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SET_ACTIVE_MARKER } from "../../actions/constants/action-types";
import { Marker } from "react-leaflet";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { findCountryByCoords } from "../../helpers/helpers";
import LocationIcon from "../../components/LocationIcon/LocationIcon";

const useFirestoreQuery = ref => {
  const [docState, setDocState] = useState({
    isLoading: true,
    data: null
  });

  useEffect(() => {
    return ref.onSnapshot(docs => {
      setDocState({
        isLoading: false,
        data: docs
      });
    });
  }, []);
  return docState;
};

const MarkerList = props => {
  const ref = firebase.firestore().collection("markers");
  const { isLoading, data } = useFirestoreQuery(ref);

  const handleMarkerClick = (e, countryRef) => {
    const position = Object.values(e.latlng);
    let foundCountry;
    findCountryByCoords(position)
      .then(snap => {
        snap.forEach(doc => (foundCountry = doc.data()));
      })
      .then(() => {
        if (foundCountry.bounds.length === 0) {
          props.map.flyTo(foundCountry.latlng, 7);
        } else {
          props.map.flyToBounds([
            [foundCountry.bounds[1], foundCountry.bounds[0]],
            [foundCountry.bounds[3], foundCountry.bounds[2]]
          ]);
        }
        props.setActiveMarker(countryRef);
      });
  };

  return (
    <>
      {isLoading && "<Loading />"}
      {data && (
        <ul>
          {data.docs.map((doc, i) => {
            let marker = doc.data();
            marker.id = doc.id;
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
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    map: state.mapReducer.map
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // TODO : Will need to correctly set markerID from Firebase
    setActiveMarker: markerId => {
      dispatch({
        type: SET_ACTIVE_MARKER,
        payload: markerId
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerList);
