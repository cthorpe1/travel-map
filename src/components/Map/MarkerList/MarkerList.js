import React, { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import LocationIcon from "../../LocationIcon/LocationIcon";

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

  return (
    <>
      {isLoading && "<Loading />"}
      {data && (
        <ul>
          {data.docs.map((doc, i) => {
            let marker = doc.data();
            return (
              <Marker
                key={i}
                position={marker.coords}
                icon={LocationIcon}
                onClick={props.handleMarkerClick}
              ></Marker>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MarkerList;
