const SignupForm = () => {
    return (
      <>
        <form>
          <div>
            <label>Email</label>
            <br />
            <input type="email" name="email"/>
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="password" name="password"/>
          </div>
          <div>
            <label>Confirm Password</label>
            <br />
            <input type="password" name="confirm-password"/>
          </div>
          <button>Create Button</button>
        </form>
      </>
    );
  };
  
  export default SignupForm;
  