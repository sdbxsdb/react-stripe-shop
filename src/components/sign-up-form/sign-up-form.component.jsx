import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  };

  console.log(formFields);

  

  return (
    <div>
      <h1>Sign up with your email</h1>
      <form onSubmit={() => {}}>
        <label type='text'>Display Name</label>
        <input required onChange={handleChange} name='displayName' value={displayName}/>

        <label type="email">Email</label>
        <input required onChange={handleChange} name='email' value={email}/>

        <label >Password</label>
        <input type="password" required onChange={handleChange} name='password' value={password}/>

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name='conformPassword' value={confirmPassword}/>

        <button type="submit">Sign Up</button>
      </form>

    </div>
  )
}

export default SignUpForm;