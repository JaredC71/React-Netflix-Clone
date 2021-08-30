import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCfyFOk5u9v0E1kITr0ZkuTvpX_BQOEZSo",
    authDomain: "react-netflix-clone-80ed7.firebaseapp.com",
    projectId: "react-netflix-clone-80ed7",
    storageBucket: "react-netflix-clone-80ed7.appspot.com",
    messagingSenderId: "940985591831",
    appId: "1:940985591831:web:a3bc9e28ccb25e31941452"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;