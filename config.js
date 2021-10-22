import firebase from 'firebase'
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyC9tQuuLXSdB0mBE5eFu0bXvhOxK5mZFww",
  authDomain: "complaint-ecd10.firebaseapp.com",
  projectId: "complaint-ecd10",
  storageBucket: "complaint-ecd10.appspot.com",
  messagingSenderId: "981485678100",
  appId: "1:981485678100:web:42ea6ff96bdfa72af98101"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

