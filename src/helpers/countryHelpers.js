import * as firebase from "firebase/app";
import "firebase/firebase-firestore";

export async function findCountryByCoords(coords) {
  return firebase
    .firestore()
    .collection("countries")
    .where("latlng", "==", coords)
    .get();
}

export async function findCountryById(id) {
  return firebase
    .firestore()
    .collection("countries")
    .doc(id)
    .get();
}

export async function findCountryByName(name) {
  return firebase
    .firestore()
    .collection("countries")
    .where("name.common", "==", name)
    .get();
}
