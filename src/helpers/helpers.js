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
        .collection("markers")
        .add(marker);
    } else {
      return "You already have a marker there";
    }
  });
}

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
//Used to push country data in JSON file up into Firestore Collection
// export function convertCountries() {
//   countries.map(country => {
//     return firebase
//       .firestore()
//       .collection("countries")
//       .add({
//         name: country.name,
//         currencies: country.currencies,
//         capital: country.capital,
//         altSpellings: country.altSpellings,
//         region: country.region,
//         subregion: country.subregion,
//         languages: country.languages,
//         latlng: country.latlng,
//         desc: country.desc,
//         bounds: country.bounds
//       });
//   });
// }
