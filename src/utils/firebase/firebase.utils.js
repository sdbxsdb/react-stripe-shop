import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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