import React, { useState } from "react";
import {
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
  LogoLinkedin,
  PersonSharp,
  Heart,
  Bag,
  Menu,
  Home,
  Grid,
  Close,
  Add,
  Remove,
  CaretBack,
} from "react-ionicons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  loginComponentHandler,
  toggleMenuHandler,
  togglelogIn,
} from "../../Redux/Reducer/appReducer";

const MobileNavbar = () => {
  const [isProductSubMenuOpen, setProductSubMenuOpen] = useState(false);
  const [signInDropdownVisible, setSignInDropdownVisible] = useState(false);

  //to open signin drowpdown in mobile view
  const toggleSignInDropdown = () => {
    setSignInDropdownVisible(!signInDropdownVisible);
    console.log("logged in");
  };
  // to open mobile sub menu
  const toggleProductSubMenu = () => {
    setProductSubMenuOpen(!isProductSubMenuOpen);
    console.log(isProductSubMenuOpen);
  };
  const appState = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  //to open the menu in mobile
  const handleToggleNavbar = () => {
    dispatch(toggleMenuHandler(true));
  };
  //to close the menu in mobile
  const menuToggleCloseHandler = () => {
    dispatch(toggleMenuHandler(false));
  };

  const handleSignInClick = () => {
    dispatch(togglelogIn(false));
    console.log(appState.isLoggedIn);
  };

  // for mobile login component
  const mobileLoginHandler = () => {
    setSignInDropdownVisible(!signInDropdownVisible);
    dispatch(toggleMenuHandler(false));
    dispatch(loginComponentHandler(true));
  };
  return (
    <>
      <div className="mobile-bottom-navigation">
        <button
          onClick={handleToggleNavbar}
          className="action-btn"
          data-mobile-menu-open-btn
        >
          <Menu color={"#00000"} title={""} />
        </button>

        <button className="action-btn">
          <Bag color={"#00000"} title={""} />

          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <Home color={"#00000"} title={""} />
        </button>

        <button className="action-btn">
          <Heart color={"#00000"} title={""} />

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <Grid color={"#00000"} title={""} />
        </button>
      </div>
      <nav
        className={
          appState.toggleMenu
            ? `mobile-navigation-menu active has-scrollbar`
            : `mobile-navigation-menu has-scrollbar`
        }
        data-mobile-menu
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button
            onClick={menuToggleCloseHandler}
            className="menu-close-btn"
            data-mobile-menu-close-btn
          >
            <Close color={"#00000"} title={""} />
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <div className="mobile-dropdown">
              <button className="action-btn" onClick={toggleSignInDropdown}>
                <PersonSharp color={"#00000"} title={""} />
              </button>
              {signInDropdownVisible && (
                <div className="mobile-dropdown-content">
                  {!appState.isLoggedIn ? (
                    <button onClick={mobileLoginHandler}>
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
              )}
            </div>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>

          <li className="menu-category">
            <button
              onClick={toggleProductSubMenu}
              className={
                isProductSubMenuOpen
                  ? `accordion-menu active`
                  : `accordion-menu`
              }
              data-accordion-btn
            >
              <p className="menu-title">Product</p>

              <div>
                {!isProductSubMenuOpen && <Add color={"#00000"} title={""} />}
                {isProductSubMenuOpen && <Remove color={"#00000"} title={""} />}
              </div>
            </button>

            {isProductSubMenuOpen && (
              <ul
                className={
                  isProductSubMenuOpen
                    ? `submenu-category-list active`
                    : `submenu-category-list`
                }
                data-accordion
              >
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Sweets
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Namkeen
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Cookies
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Cakes
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Premium Sweets
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Special Ocassions</p>
            </button>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Blogs</p>
            </button>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Contact Us</p>
            </button>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>

                <CaretBack color={"#00000"} title={""} />
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    English
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Espa&ntilde;ol
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Fren&ccedil;h
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
                <CaretBack color={"#00000"} title={""} />
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    USD &dollar;
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    EUR &euro;
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li>
              <a href="#" className="social-link">
                <LogoFacebook color={"#00000"} title={""} />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <LogoTwitter color={"#00000"} title={""} />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <LogoInstagram color={"#00000"} title={""} />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <LogoLinkedin color={"#00000"} title={""} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
