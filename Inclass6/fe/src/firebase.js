

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBBXsOOS3LP3-8wdFY9mRzYFiqLgAdLlls",
    authDomain: "facebook-2e25d.firebaseapp.com",
    projectId: "facebook-2e25d",
    storageBucket: "facebook-2e25d.appspot.com",
    messagingSenderId: "237541627146",
    appId: "1:237541627146:web:7b565f66aaee1a5ebb96f3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
  
export {db, auth, storage}