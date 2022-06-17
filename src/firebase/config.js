import images from "~/assets";
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAK2vi6w3NPVpz6JPBPDaQoR3YU3wd8Dew",
  authDomain: "texoai.firebaseapp.com",
  projectId: "texoai",
  storageBucket: "texoai.appspot.com",
  messagingSenderId: "951055184081",
  appId: "1:951055184081:web:06e401ee1898c8899d95f0",
  measurementId: "G-TG31FR8HQ0",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
const database = getDatabase();
const authSubmit = getAuth();
const handleSubmit = (email, password, name) => {
  if (!email) return;
  createUserWithEmailAndPassword(authSubmit, email, password)
    .then((userCredential) => {
      userCredential.user.displayName = name;
      userCredential.user.photoURL = images.noneImage;
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: images.noneImage,
      });
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        username: name,
        email: email,
        password: password,
      })
        .then(() => {
          // Data saved successfully!
        })
        .catch((error) => {
          // The write failed...
        });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const handleLogin = (email, password) => {
  const authSubmit = getAuth();
  if (!email) return;
  signInWithEmailAndPassword(authSubmit, email, password)
    .then((result) => {
      const user = auth.currentUser;
      const database_ref = database_ref;
      const user_data = {
        last_login: Date.now(),
      };
      database_ref.child("users/" + user.uid).update(user_data);
    })
    .catch((error) => {
      throw new Error(error);
    });
};
const handleChangePassword = (valueEmail) => {
  return sendPasswordResetEmail(auth, valueEmail);
};
export { auth, db, handleSubmit, handleLogin, handleChangePassword };
export default firebase;
