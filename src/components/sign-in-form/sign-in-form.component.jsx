import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-in.form.styles.scss';
import Button from '../button/button.component';

import { UserContext } from "../../contexts/user.context"; 

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password,  } = formFields;

  const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      setCurrentUser(user);

    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Wrong password');
          break
        case 'auth/user-not-found':
          alert('User not found');
          break
        default:
          alert('Something went wrong - please try again')
          console.log(error);

      }

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <small>Sign In</small>
      <form
        onSubmit={handleSubmit}
        className=""
      >

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />


        <div className="buttons-container">
          <Button type="submit" buttonType='inverted'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
