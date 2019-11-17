import * as firebase from "firebase/app";
import "firebase/firebase-firestore";

export async function getMarkersFromDB() {
  return firebase
    .firestore()
    .collection("markers")
    .get();
}

export async function getMarkerFromDB(name) {
  return firebase
    .firestore()
    .collection("markers")
    .where("name", "==", name)
    .get();
}

export async function addMarkerToDB(marker) {
  return getMarkerFromDB(marker.name).then(snap => {
    if (snap.empty) {
      return firebase
        .firestore()
        .collection("countries")
        .where("latlng", "==", Object.values(marker.coords))
        .get()
        .then(snap => {
          if (!snap.empty) {
            marker.countryRef = snap.docs[0].id;
            return firebase
              .firestore()
              .collection("markers")
              .add(marker);
          }
        });
    } else {
      return "You already have a marker there";
    }
  });
}
