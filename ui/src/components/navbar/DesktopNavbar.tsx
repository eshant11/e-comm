import { NavLink } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <NavLink to="/" className="menu-title">
              Home
            </NavLink>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Products
            </a>

            <div className="dropdown-panel">
              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="#">Categories</a>
                </li>

                <li className="panel-list-item">
                  <NavLink to="/product/sweets">Sweets</NavLink>
                </li>

                <li className="panel-list-item">
                  <NavLink to="/product/namkeen">Namkeen</NavLink>
                </li>

                <li className="panel-list-item">
                  <NavLink to="/product/cookies">Cookies</NavLink>
                </li>

                <li className="panel-list-item">
                  <NavLink to="/product/cakes">Cakes</NavLink>
                </li>

                <li className="panel-list-item">
                  <NavLink to="#">Premium Sweets</NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-category">
            <NavLink to="/occasion" className="menu-title">
              Special Occasions
            </NavLink>
          </li>

          <li className="menu-category">
            <NavLink to="/blog" className="menu-title">
              Blog
            </NavLink>
          </li>

          <li className="menu-category">
            <NavLink to="/contact" className="menu-title">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
