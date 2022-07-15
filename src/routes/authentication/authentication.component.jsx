import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

  // const logFacebookUser = async () => {
  //   const { user } = await signInWithFacebookPopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {currentUser
        ? (setTimeout(() => {
            navigate("/");
          }, 2000),
          (
            <div className="w-screen h-screen absolute bg-white bg-opacity-50 flex justify-center items-center top-0 left-0 z-100">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
          ))
        : null}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
