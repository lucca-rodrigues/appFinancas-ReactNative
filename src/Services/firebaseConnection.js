import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
let config = {
  apiKey: "AIzaSyCRMh61DmNd_fTe6zT2idj1ilCylQ8r0D8",
  authDomain: "appfinancas-49366.firebaseapp.com",
  databaseURL: "https://appfinancas-49366.firebaseio.com",
  projectId: "appfinancas-49366",
  storageBucket: "appfinancas-49366.appspot.com",
  messagingSenderId: "104112296077",
  appId: "1:104112296077:web:fa81d255b077e158ab92c4",
  measurementId: "G-QXWL74WC3R"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;