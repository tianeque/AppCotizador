import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAdH9dZJTjKKugwhfhaIERdzkytD2NAXpk",
    authDomain: "appcotizador.firebaseapp.com",
    databaseURL: "https://appcotizador.firebaseio.com",
    projectId: "appcotizador",
    storageBucket: "",
    messagingSenderId: "41400734898"
  };

  firebase.initializeApp(config);

  export default firebase
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
