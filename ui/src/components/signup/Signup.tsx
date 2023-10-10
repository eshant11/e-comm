import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  signinComponentHandler,
  loginComponentHandler,
  togglelogIn,
} from "../../Redux/Reducer/appReducer";
import signupService from "../../service/signupService";
import { FormData } from "../interface";

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
    event.preventDefault();
    const response = await signupService(formData);
    if (response && response.status === 200) {
      dispatch(togglelogIn(true));
      dispatch(signinComponentHandler(false));
    } else {
      dispatch(signinComponentHandler(true));
    }
  };

  // to open login form
  const openLoginHandler = () => {
    dispatch(loginComponentHandler(true));
    dispatch(signinComponentHandler(false));
  };

  const inputsHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(formData.confirm_Password);

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
              <img src="/Images/google.png" alt="google" />
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
