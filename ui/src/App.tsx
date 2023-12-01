import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/about us/AboutUs";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Occasion from "./components/occasion/Occasion";
import Product from "./components/Product/Product";
import ProductDeatils from "./components/Product/ProductDeatils";
import MyAccount from "./components/account/MyAccount";
import {} from "./Redux/Reducer/appReducer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product">
            <Route index={true} element={<Product />} />
            <Route
              path="/product/:category/:productId"
              element={<ProductDeatils />}
            />
            <Route
              path="/product/sweet"
              element={<Product category="sweet" />}
            />
            <Route
              path="/product/namkeen"
              element={<Product category="namkeen" />}
            />
            <Route
              path="/product/cookies"
              element={<Product category="cookies" />}
            />
            <Route
              path="/product/cakes"
              element={<Product category="cakes" />}
            />
          </Route>
          <Route path="/occasion" element={<Occasion />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<MyAccount />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
