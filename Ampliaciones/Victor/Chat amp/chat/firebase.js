import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
// Esto conecta con firebase
const firebaseConfig = {
    apiKey: "AIzaSyAppZTvRmV5snaWCnyOdQFhqBmVX4vLVQ4",
    authDomain: "dailysense-af363.firebaseapp.com",
    projectId: "dailysense-af363",
    storageBucket: "dailysense-af363.appspot.com",
    messagingSenderId: "122710640136",
    appId: "1:122710640136:web:207c772e4e466dc10c73bd",
    measurementId: "G-F2ZFBZQGM4"
  };
  //Configuracion firebase

  let app;
    // comprobamos si hay apps
  if (firebase.apps.lenght === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
      app = firebase.app();
  }
  //guardamos la BBDD y el auth
  const bbdd = app.firestore();
  const auth = firebase.auth();
  // lo exportamos
  export {bbdd, auth};