import React, { useState } from "react";
import {
  togglelogIn,
  loginComponentHandler,
  signinComponentHandler,
} from "../../Redux/Reducer/appReducer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logIn } from "../../service/logIn";

export interface LoginForm {
  userName: string;
  password: string;
}
const Login = () => {
  const loginFormDetails: LoginForm = {
    userName: "",
    password: "",
  };
  const [loginDetails, setLoginDetails] = useState<LoginForm>(loginFormDetails);
  const [loginError, setLoginError] = useState<string>(""); // Initialize login error state
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.app);

  const loginInputsHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginDetails((oldData) => ({
      ...oldData,
      [name]: value,
    }));

    if (loginError !== "") {
      setLoginError("");
    }
  };
  // when user click on signin btn for login
  const userLoginHandle = async (event: any) => {
    event.preventDefault();
    const response = await logIn(loginDetails);
    if (response && response.status === 200) {
      dispatch(togglelogIn(true));
      dispatch(loginComponentHandler(false));
    } else {
      setLoginError("Incorrect username or password.");
    }
  };
  // To close the login component on outside click
  const overlayCloseHandler = () => {
    dispatch(loginComponentHandler(false));
  };

  //To Open Signup Component
  const openSignupHandler = () => {
    dispatch(signinComponentHandler(true));
    dispatch(loginComponentHandler(false));
  };
  return (
    <>
      <div
        onClick={overlayCloseHandler}
        className={
          appState.showLogin ? `overlay-login active-login` : `overlay-login`
        }
      >
        <div className="login-container" onClick={(e) => e.stopPropagation()}>
          <h1>Login</h1>

          {/* For login error handling */}
          <span className="login-error-message">{loginError}</span>

          <form className="login-form" onSubmit={userLoginHandle}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="userName"
              onChange={loginInputsHandle}
              value={loginDetails.userName}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={loginInputsHandle}
              value={loginDetails.password}
              required
            />

            <button type="submit">Login</button>
          </form>

          <div className="social-login">
            <p>Or login with:</p>
            <div className="login-container1">
              <a className="google-login">
                <img src="/Images/google.png" alt="google" />
              </a>
              <a className="apple-login">
                <img src="/Images/apple.png" alt="apple" />
              </a>
            </div>
          </div>
          <hr />
          <p className="signup-link">
            Don't have an account?|
            <a onClick={openSignupHandler} href="#">
              &nbsp; Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
