import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgCyO2LaqAIteV_NSmrEqa_oZsVblAg5s",
  authDomain: "react-stripe-fa893.firebaseapp.com",
  projectId: "react-stripe-fa893",
  storageBucket: "react-stripe-fa893.appspot.com",
  messagingSenderId: "839859292592",
  appId: "1:839859292592:web:cd5bb9f1271c8b7ddb6e75",
};

const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const facebookProvider = new FacebookAuthProvider();

export const db = getFirestore();

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithFacebookPopup = () =>
signInWithPopup(auth, facebookProvider)



export const createUserDocumentFromAuth = async (userAuth) => {

  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log({userDocRef});

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //If user data does NOT exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user - ", error);
    }
  }

  //If user data exists
  //return useDocRef
  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;

  return await createAuthUserWithEmailAndPassword(auth, email, password)
}