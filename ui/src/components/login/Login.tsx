import React, { useState } from "react";
import {
  togglelogIn,
  loginComponentHandler,
  signinComponentHandler,
} from "../../Redux/Reducer/appReducer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logIn } from "../../service/logIn";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogin,
} from "react-google-login";

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

  //For social login

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ("tokenId" in res) {
      // Successful Google login, handle the response here
      console.log("LOGIN SUCCESS !!", res.profileObj);
      dispatch(togglelogIn(true));
      setTimeout(() => {
        dispatch(loginComponentHandler(false));
      }, 300);
    }
  };
  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // Google login failed, handle the error here
    console.log("LOGIN FAILED !!", res);
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
                <GoogleLogin
                  clientId="8325908074-23coorhho96dbaf179vk0ng3ne4v619s.apps.googleusercontent.com"
                  buttonText=""
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={false} //for default loggedin
                  className="customGoogleButton"
                  prompt="select_account" // to ask every time for a option for email
                />
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
