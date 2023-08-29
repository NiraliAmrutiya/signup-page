import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setenteredEmail(e.target.value);
    setValidEmail(enteredEmail.includes("@"));
  };

  const handleValidEmail = (e) => {
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
  return (
    <React.Fragment>
      <h3>Sign Up Form</h3>
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
          <input type="password" name="password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <br />
          <input type="password" name="confirm-password" />
        </div>
        <button>Create Button</button>
      </form>
    </React.Fragment>
  );
};

export default SignupForm;
