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

const Footer = () => {
  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand directory</h2>

          <div className="footer-category-box">
            <h3 className="category-box-title">Sweets:</h3>

            <a href="#" className="footer-category-link">
              Bengali
            </a>
            <a href="#" className="footer-category-link">
              Mawa
            </a>
            <a href="#" className="footer-category-link">
              Dry Fruits
            </a>
            <a href="#" className="footer-category-link">
              SugarFree
            </a>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">Namkeens :</h3>

            <a href="#" className="footer-category-link">
              Laung Sev
            </a>
            <a href="#" className="footer-category-link">
              Mixture
            </a>
            <a href="#" className="footer-category-link">
              Double Laung Sev
            </a>
            <a href="#" className="footer-category-link">
              Poha
            </a>
            <a href="#" className="footer-category-link">
              Sweet Mixture
            </a>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">Cokkies :</h3>

            <a href="#" className="footer-category-link">
              Jam Filled Butter
            </a>
            <a href="#" className="footer-category-link">
              Pinwheel
            </a>
            <a href="#" className="footer-category-link">
              Eggnog Thumbprints
            </a>
            <a href="#" className="footer-category-link">
              Salted Honey Pistachio Cookies
            </a>
          </div>

          <div className="footer-category-box">
            <h3 className="category-box-title">Cakes :</h3>

            <a href="#" className="footer-category-link">
              Pineapple
            </a>
            <a href="#" className="footer-category-link">
              Vanilla
            </a>
            <a href="#" className="footer-category-link">
              Butterscotch
            </a>
            <a href="#" className="footer-category-link">
              Red Velvet
            </a>

            <a href="#" className="footer-category-link">
              Caramel
            </a>
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
              <a href="#" className="footer-nav-link">
                Sweets
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Namkeens
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Delivery
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Legal Notice
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Terms and conditions
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                About us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Secure payment
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
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
                  <a href="#" className="footer-nav-link">
                    <LogoFacebook color={""} title={""} />
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <LogoTwitter color={""} title={""} />
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <LogoLinkedin color={""} title={""} />
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <LogoInstagram color={""} title={""} />
                  </a>
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
            Copyright &copy; <a href="#">Anon</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
