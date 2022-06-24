import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithFacebookPopup,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <div className="flex flex-col">
        <button onClick={logGoogleUser}>Sign In with Google</button>
        <button onClick={logFacebookUser}>Sign In with Facebook</button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
