import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_TOKEN}`,
  authDomain: "travelmap-2955a.firebaseapp.com",
  databaseURL: "https://travelmap-2955a.firebaseio.com",
  projectId: "travelmap-2955a",
  storageBucket: "",
  messagingSenderId: "126493888147",
  appId: "1:126493888147:web:a4a8121a8db26861cd4766"
};
const app = firebase.initializeApp(config);

export default app;