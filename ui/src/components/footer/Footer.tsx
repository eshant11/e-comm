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
  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand directory</h2>

          <div className="footer-category-box">
            <h3 className="category-box-title">Sweets:</h3>

            <NavLink to="/product/sweets" className="footer-category-link">
              Bengali
            </NavLink>
            <NavLink to="/product/sweets" className="footer-category-link">
              Mawa
            </NavLink>
            <NavLink to="/product/sweets" className="footer-category-link">
              Dry Fruits
            </NavLink>
            <NavLink to="/product/sweets" className="footer-category-link">
              SugarFree
            </NavLink>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">Namkeens :</h3>

            <NavLink to="/product/namkeen" className="footer-category-link">
              Laung Sev
            </NavLink>
            <NavLink to="/product/namkeen" className="footer-category-link">
              Mixture
            </NavLink>
            <NavLink to="/product/namkeen" className="footer-category-link">
              Double Laung Sev
            </NavLink>
            <NavLink to="/product/namkeen" className="footer-category-link">
              Poha
            </NavLink>
            <NavLink to="/product/namkeen" className="footer-category-link">
              Sweet Mixture
            </NavLink>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">cakesookies :</h3>

            <NavLink to="/product/cookies" className="footer-category-link">
              Jam Filled Butter
            </NavLink>
            <NavLink to="/product/cookies" className="footer-category-link">
              Pinwheel
            </NavLink>
            <NavLink to="/product/cookies" className="footer-category-link">
              Eggnog Thumbprints
            </NavLink>
            <NavLink to="/product/cookies" className="footer-category-link">
              Salted Honey Pistachio Cookies
            </NavLink>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">Cakes :</h3>

            <NavLink to="/product/cakes" className="footer-category-link">
              Pineapple
            </NavLink>
            <NavLink to="/product/cakes" className="footer-category-link">
              Vanilla
            </NavLink>
            <NavLink to="/product/cakes" className="footer-category-link">
              Butterscotch
            </NavLink>
            <NavLink to="/product/cakes" className="footer-category-link">
              Red Velvet
            </NavLink>

            <NavLink to="/product/cakes" className="footer-category-link">
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
              <NavLink to="/product/sweets" className="footer-nav-link">
                Sweets
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/namkeen" className="footer-nav-link">
                Namkeens
              </NavLink>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Prices drop
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                New products
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Best sales
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Contact us
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Sitemap
              </NavLink>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Delivery
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Legal Notice
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Terms and conditions
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                About us
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Secure payment
              </NavLink>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Prices drop
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                New products
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Best sales
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
                Contact us
              </NavLink>
            </li>

            <li className="footer-nav-item">
              <NavLink to="/product/sweets" className="footer-nav-link">
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
