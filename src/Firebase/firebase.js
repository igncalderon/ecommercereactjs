import firebase from "firebase";
import 'firebase/firestore'
// CONFIGURACION FIREBASE DE MI APP
var firebaseConfig = {
    apiKey: "AIzaSyATLM40Ra_5wdpehK6b6Kp5q8zIHZj-iBY",
    authDomain: "ecommerce-react-a7ca8.firebaseapp.com",
    projectId: "ecommerce-react-a7ca8",
    storageBucket: "ecommerce-react-a7ca8.appspot.com",
    messagingSenderId: "430630718594",
    appId: "1:430630718594:web:d512cc5e61e2f74eb9389b",
    measurementId: "G-FW1G724LRH"
  };
//   INICIALIZO FIREBASE
firebase.initializeApp(firebaseConfig)
//   disponible para todos
export const projectFirestore = firebase.firestore()