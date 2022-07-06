import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {




  // const logFacebookUser = async () => {
  //   const { user } = await signInWithFacebookPopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
