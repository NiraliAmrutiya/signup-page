import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validPassword } from "../RegEx.js";
//password conditions

const SignupForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPwd, setEnteredPwd] = useState("");
  const [enteredConfirmPwd, setEnteredConfirmPwd] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [error, setError] = useState("");
  const [pwdError, setPwdError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
    setValidEmail(enteredEmail.includes("@"));
  };

  //handles valid email onblur
  const handleValidEmail = () => {
    if (!validEmail) {
      setError("Please enter valid email");
    } else {
      setError("Valid Email add");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // it prevent default property i.e. here it prevent from submitting the form also without preventDefault if the form is submitted the page gets reload
    navigate("/home");
  };

  const handleValidPassword = () => {
    console.log(enteredPwd);
    if (!validPassword.test(enteredPwd)) {
      setPwdError("Password is not valid");
    }
  };

  const handlePwdChange = (e) => {
    setEnteredPwd(e.target.value);
  };

  const handleConfirmPwdChange = (e) => {
    setEnteredConfirmPwd(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={enteredEmail}
          onChange={handleEmailChange}
          onBlur={handleValidEmail}
        />
        <p>{error}</p>
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={enteredPwd}
          onChange={handlePwdChange}
          onBlur={handleValidPassword}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirm-password"
          value={enteredConfirmPwd}
          onChange={handleConfirmPwdChange}
        />
        <p>{pwdError}</p>
      </div>
      <button>Create Button</button>
    </form>
  );
};

export default SignupForm;
