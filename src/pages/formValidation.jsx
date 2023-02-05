import React, { useState } from "react";
import "./formstyle.css";

const FormValidation = () => {
  const [user, setUser] = useState({});
  const [errormessage, setErrorMessage] = useState('');
  const [focused, setfocused] = useState(false);

  const [filted,setFilted] = useState(true);
 


  console.log(user);

  const handleFocus = (e) => {
  


  }

  

  const handleSubmit = () => {



 }   

  

  const handleChange = (e) => {
    setFilted({...filted,[e.target.name] : true});
    console.log();

    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };


  return (
    <div>
      <div className="wrapper">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="username"
            required 
            // validation
            pattern="^[A-Za-z0-9]{3,16}$"
            onBlur={handleFocus}
            focused = {focused.toString()}

            placeholder="username"
          />
          <span className="error">  username must be 3-16 digit only letter</span>
          <input
            className="input"
            type="email"
            required
            onChange={handleChange}
            name="email"
            placeholder="email"
            focused = {focused.toString()}

          />
          <span className="error">  email must be email id</span>

          <input
            className="input"
            type="date"
            onChange={handleChange}
            name="dob"
            placeholder="DOB"
            focused = {focused.toString()}

          />
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="password"
            placeholder="password"
            pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
            focused = {focused.toString()}

          />
          <span className="error"> password  must 1 num 1 letter 1 capitalletter </span>

          <input
            className="input"
            onChange={handleChange}
            type="text"
            name="confirmpassword"
            placeholder="confirm password"
            pattern= {user.password}
            focusedval={focused.toString()}

          />
          <span className="error">  Password don't match</span>

          
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
