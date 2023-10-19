import { Link } from "react-router-dom";
import {
  togglelogIn,
  loginComponentHandler,
} from "../../Redux/Reducer/appReducer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
  LogoLinkedin,
  PersonSharp,
  Heart,
  Bag,
} from "react-ionicons";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import DesktopNavbar from "../navbar/DesktopNavbar";
import MobileNavbar from "../navbar/MobileNavbar";
import SearchFilter from "./SearchFilter";

const Header = () => {
  const appState = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleSignInClick = () => {
    dispatch(togglelogIn(false));
    console.log(appState.isLoggedIn);
  };
  const loginHandler = () => {
    dispatch(loginComponentHandler(true));
  };

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-link">
                <LogoFacebook />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <LogoTwitter color={"#00000"} title={"twitter"} />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <LogoInstagram color={"#00000"} title={"insta"} />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <LogoLinkedin color={"#00000"} title={""} />
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              &nbsp;This Week Order Over - ₹200
            </p>
          </div>

          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD &#36;</option>
              <option value="eur">INR ₹</option>
            </select>

            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Hindi</option>
            </select>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <Link to="/" className="header-logo">
            <img
              src="/Images/logo.png"
              alt="Anon's logo"
              width="120"
              height="60"
            />
          </Link>

          <SearchFilter />

          <div className="header-user-actions">
            <div className="dropdown">
              <button className="action-btn">
                <PersonSharp color={"#00000"} title={""} />
              </button>
              <div className="dropdown-content">
                {!appState.isLoggedIn ? (
                  <button onClick={loginHandler}>
                    <a href="#">Sign In</a>
                  </button>
                ) : (
                  <>
                    <a href="#">My Account</a>
                    <button onClick={handleSignInClick}>
                      <a href="#">Sign Out</a>
                    </button>
                  </>
                )}
              </div>
            </div>

            <button className="action-btn">
              <Heart color={"#00000"} title={""} />
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <Bag color={"#00000"} title={""} />
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>

      <DesktopNavbar />
      {appState.showLogin ? <Login /> : null}
      {appState.showSignUp ? <Signup /> : null}

      {/* MOBILE */}

      <MobileNavbar />
    </header>
  );
};

export default Header;
