import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCgCyO2LaqAIteV_NSmrEqa_oZsVblAg5s",
  authDomain: "react-stripe-fa893.firebaseapp.com",
  projectId: "react-stripe-fa893",
  storageBucket: "react-stripe-fa893.appspot.com",
  messagingSenderId: "839859292592",
  appId: "1:839859292592:web:cd5bb9f1271c8b7ddb6e75",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
  prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

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
      console.error('Error creating user - ', error);
    }
  }

  //If user data exists
  //return useDocRef
  return userDocRef;


}