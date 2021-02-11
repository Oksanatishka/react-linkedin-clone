import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBlc9AbVU93n3kK9ctwUOwUw9QORgVM1Ac",
    authDomain: "linkedin-clone-project-606c1.firebaseapp.com",
    projectId: "linkedin-clone-project-606c1",
    storageBucket: "linkedin-clone-project-606c1.appspot.com",
    messagingSenderId: "1030666761064",
    appId: "1:1030666761064:web:9179218f9cb06c0fc11cdd"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth(); // this auth is going to allow us to do things like logging in, signing in and search etc
export { db, auth };
// const storage = firebase.storage();
// export { db, auth, storage };
// export default db;