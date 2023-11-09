import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  signinComponentHandler,
  loginComponentHandler,
  togglelogIn,
} from "../../Redux/Reducer/appReducer";
import signupService from "../../service/signupService";
import { FormData } from "../interface";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const Signup = () => {
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.app);
  const signUpCloseHandler = () => {
    dispatch(signinComponentHandler(false));
  };

  //Signup value
  const signupFormData: FormData = {
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirm_Password: "",
    gender: "male", // Provide a default value
  };
  const [formData, setFormData] = useState<FormData>(signupFormData);
  // to dispaly error message in form filing
  const [emailError, setEmailError] = useState<string>("");
  const [mobileNumberError, setMobileNumberError] = useState<string>("");
  // Import the regular expressions
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const mobileNumberRegex =
    /^(?:\+?\d{1,3}[-.●]?)?\(?\d{3}\)?[-.●]?\d{3}[-.●]?\d{4}$/;

  // to sumbit signup form
  const userSignUpHandler = async (event: any) => {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }

    const response = await signupService(formData);
    if (response && response.status === 200) {
      dispatch(togglelogIn(true));
      dispatch(signinComponentHandler(false));
    } else {
      dispatch(signinComponentHandler(true));
    }
    return response;
  };

  // to open login form
  const openLoginHandler = () => {
    dispatch(loginComponentHandler(true));
    dispatch(signinComponentHandler(false));
  };

  const inputsHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Validate email
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

    // Validate mobile number
    if (name === "phoneNumber") {
      if (!mobileNumberRegex.test(value)) {
        setMobileNumberError("Invalid mobile number format");
      } else {
        setMobileNumberError("");
      }
    }
  };

  const onSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("tokenId" in res) {
      // Extract data from Google profile
      const { email, name } = res.profileObj;

      const googleSignUpData: FormData = {
        fullName: name,
        email: email,
        userName: "",
        phoneNumber: "",
        password: "",
        confirm_Password: "",
        gender: "Other",
      };
      const response = await signupService(googleSignUpData);

      // Successful Google signup, handle the response here
      // console.log("SIGNUP SUCCESS !!", response);

      // Check the response and display an error message if email is already taken
      if (response && response.status === 500) {
        console.log("Signup error");
      } else {
        // Successful Google signup, handle the response here
        console.log("SIGNUP SUCCESS !!", res.profileObj);
        dispatch(togglelogIn(true));
        setTimeout(() => {
          dispatch(signinComponentHandler(false));
        }, 300);
      }
    }
  };

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // Google signup failed, handle the error here
    console.log("SIGNUP FAILED !!", res);
  };
  return (
    <div
      onClick={signUpCloseHandler}
      className={
        appState.showSignUp ? `overlay-signup active-signup` : `overlay-signup`
      }
    >
      <div className="signup-container" onClick={(e) => e.stopPropagation()}>
        <h1 className="form-title">Sign Up</h1>
        <form action="#" onSubmit={userSignUpHandler}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={inputsHandle}
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="userName"
                value={formData.userName}
                onChange={inputsHandle}
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={inputsHandle}
                required
              />
              <span className="error-message">{emailError}</span>
            </div>
            <div className="user-input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={inputsHandle}
                required
              />
              <span className="error-message">{mobileNumberError}</span>
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={inputsHandle}
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirm_Password"
                value={formData.confirm_Password}
                onChange={inputsHandle}
                required
              />
              {/* to check password and confirm password */}
              {formData.confirm_Password !== formData.password && (
                <span className="error-message">
                  {"Password and Confirm Password do not match"}
                </span>
              )}
            </div>
          </div>
          <div className="gender-details-box">
            <span className="gender-title">Gender</span>
            <div className="gender-category">
              <label className="radio-label" htmlFor="male">
                Male
              </label>
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={inputsHandle}
                id="male"
                required
              />
              <label className="radio-label" htmlFor="female">
                Female
              </label>
              <input
                className="radio-input"
                type="radio"
                name="gender"
                onChange={inputsHandle}
                value="Female"
                id="female"
              />
              <label className="radio-label" htmlFor="other">
                Other
              </label>
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="Other"
                onChange={inputsHandle}
                id="other"
                required
              />
            </div>
          </div>
          <div className="form-submit-btn">
            <input
              type="submit"
              value="Register"
              disabled={
                !!emailError ||
                !!mobileNumberError ||
                formData.confirm_Password !== formData.password
              }
            />
          </div>
        </form>
        <div className="social-signup">
          <p>Or sign up with:</p>
          <div className="signup-container1">
            <button className="google-signup">
              <GoogleLogin
                clientId="8325908074-23coorhho96dbaf179vk0ng3ne4v619s.apps.googleusercontent.com"
                buttonText=""
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
                className="google-register"
                prompt="select_account" // t ask every time for a option for email
              />
              o
            </button>
            <button className="apple-signup">
              <img src="/Images/apple.png" alt="apple" />
            </button>
          </div>
        </div>
        <p className="login-link">
          Already have an account?{" "}
          <a onClick={openLoginHandler} href="#">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
