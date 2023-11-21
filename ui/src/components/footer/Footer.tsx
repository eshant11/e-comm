import React from "react";
import {
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
  LogoLinkedin,
  MailOutline,
  CallOutline,
  LocationOutline,
} from "react-ionicons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for a smooth scroll
    });
  };
  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand directory</h2>

          <div className="footer-category-box">
            <h3 className="category-box-title">Sweets:</h3>

            <NavLink
              to="/product/sweet"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Bengali
            </NavLink>
            <NavLink
              to="/product/sweet"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Mawa
            </NavLink>
            <NavLink
              to="/product/sweet"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Dry Fruits
            </NavLink>
            <NavLink
              to="/product/sweet"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              SugarFree
            </NavLink>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">Namkeens :</h3>

            <NavLink
              to="/product/namkeen"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Laung Sev
            </NavLink>
            <NavLink
              to="/product/namkeen"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Mixture
            </NavLink>
            <NavLink
              to="/product/namkeen"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Double Laung Sev
            </NavLink>
            <NavLink
              to="/product/namkeen"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Poha
            </NavLink>
            <NavLink
              to="/product/namkeen"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Sweet Mixture
            </NavLink>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">cakesookies :</h3>

            <NavLink
              to="/product/cookies"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Jam Filled Butter
            </NavLink>
            <NavLink
              to="/product/cookies"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Pinwheel
            </NavLink>
            <NavLink
              to="/product/cookies"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Eggnog Thumbprints
            </NavLink>
            <NavLink
              to="/product/cookies"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Salted Honey Pistachio Cookies
            </NavLink>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">Cakes :</h3>

            <NavLink
              to="/product/cakes"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Pineapple
            </NavLink>
            <NavLink
              to="/product/cakes"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Vanilla
            </NavLink>
            <NavLink
              to="/product/cakes"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Butterscotch
            </NavLink>
            <NavLink
              to="/product/cakes"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Red Velvet
            </NavLink>

            <NavLink
              to="/product/cakes"
              className="footer-category-link"
              onClick={scrollToTop}
            >
              Caramel
            </NavLink>
          </div>
        </div>
      </div>

      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Popular Categories</h2>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Sweets
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/namkeen"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Namkeens
              </NavLink>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Prices drop
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                New products
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Best sales
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Contact us
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Sitemap
              </NavLink>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Delivery
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Legal Notice
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Terms and conditions
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                About us
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Secure payment
              </NavLink>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Prices drop
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweet" className="footer-nav-link">
                New products
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Best sales
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Contact us
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink
                to="/product/sweet"
                className="footer-nav-link"
                onClick={scrollToTop}
              >
                Sitemap
              </NavLink>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <LocationOutline color={""} title={""} />
              </div>

              <address className="content">
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <CallOutline color={""} title={""} />
              </div>

              <a href="tel:+607936-8058" className="footer-nav-link">
                (607) 936-8058
              </a>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <MailOutline color={""} title={""} />
              </div>

              <a href="mailto:example@gmail.com" className="footer-nav-link">
                example@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>

            <li>
              <ul className="social-link">
                <li className="footer-nav-item">
                  <NavLink to="/product/sweets" className="footer-nav-link">
                    <LogoFacebook color={""} title={""} />
                  </NavLink>
                </li>

                <li className="footer-nav-item">
                  <NavLink to="/product/sweets" className="footer-nav-link">
                    <LogoTwitter color={""} title={""} />
                  </NavLink>
                </li>

                <li className="footer-nav-item">
                  <NavLink to="/product/sweets" className="footer-nav-link">
                    <LogoLinkedin color={""} title={""} />
                  </NavLink>
                </li>

                <li className="footer-nav-item">
                  <NavLink to="/product/sweets" className="footer-nav-link">
                    <LogoInstagram color={""} title={""} />
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <img
            src="/Images/payment.png"
            alt="payment method"
            className="payment-img"
          />

          <p className="copyright">
            Copyright &copy; <NavLink to="/product/sweets">Anon</NavLink> all
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
