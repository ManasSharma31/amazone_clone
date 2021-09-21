import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2WEds5EKqMr-xRbGmQiOeWay6lhgVq3w",
    authDomain: "fir-143df.firebaseapp.com",
    projectId: "fir-143df",
    storageBucket: "fir-143df.appspot.com",
    messagingSenderId: "959503842774",
    appId: "1:959503842774:web:c00c2fa5426c8590cbf877",
    measurementId: "G-S2H33H7Q9D"
  };

firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth , provider}
  
