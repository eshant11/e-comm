import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useAppSelector } from "../../app/hooks";
import { useLocation } from "react-router-dom";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  const appState = useAppSelector((state) => state.app);
  const location = useLocation();
  const menuToggle = appState.toggleMenu;

  const shouldRenderBanner = location.pathname === "/";

  return (
    <>
      <div
        className={menuToggle ? `overlay active` : `overlay`}
        data-overlay
      ></div>
      <Header />
      <main>
        {shouldRenderBanner && <Banner />}
        <Outlet />
        {shouldRenderBanner && <Testimonial />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
