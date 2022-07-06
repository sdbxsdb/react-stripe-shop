import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithFacebookPopup,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {




  // const logFacebookUser = async () => {
  //   const { user } = await signInWithFacebookPopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
