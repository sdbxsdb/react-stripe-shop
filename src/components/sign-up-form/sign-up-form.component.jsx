import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if ( password !== confirmPassword ) {
      alert('passwords do not match');
      return;
    }

    try {

    } catch (error) {
      
    }
  
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  };
  

  return (
    <div>
      <h1>Sign up with your email</h1>
      <form onSubmit={(event) => {handleSubmit(event)}} className='flex flex-col mt-4 border border-red-500'>
        <label type='text'>Display Name</label>
        <input required onChange={handleChange} name='displayName' value={displayName}/>

        <label type="email">Email</label>
        <input required onChange={handleChange} name='email' value={email}/>

        <label >Password</label>
        <input type="password" required onChange={handleChange} name='password' value={password}/>

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

        <button type="submit">Sign Up</button>
      </form>

    </div>
  )
}

export default SignUpForm;