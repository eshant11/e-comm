import { useEffect } from "react";
import ProductCart from "./ProductCart";
import { ProductInfo } from "../interface";
import { fetchProductsByCategory } from "../../Redux/Reducer/productReducer";
import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { NavLink } from "react-router-dom";

interface ProductProps {
  category?: string;
}

const Product = (props: ProductProps) => {
  const dispatch = useAppDispatch();

  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );
  useEffect(() => {
    if (props.category) {
      // Dispatch the fetchProductsByCategory action
      dispatch(fetchProductsByCategory(props.category)).then(
        (data) => console.log(data) // to check the data and console outside the then will result in late res.
      );
    }
  }, [dispatch, props.category]);

  // filter the product whose productCategoryStatus == "New Arrival"
  const newArrivalList: ProductInfo[] = productList
    .filter((product) => product.productCategoryStatus.includes("New Arrival"))
    .map((product) => ({
      productName: product.productName,
      productCategoryStatus: product.productCategoryStatus,
      productCategory: product.productCategory,
      price: product.price,
      availablity: product.availablity,
      imageUrl: product.imageUrl,
      offer: product.offer,
      _id: product._id,
    }));

  // filter the product whose productCategoryStatus == "Trending"
  const trendingList: ProductInfo[] = productList
    .filter((product) => product.productCategoryStatus.includes("Trending"))
    .map((product) => ({
      productName: product.productName,
      productCategoryStatus: product.productCategoryStatus,
      productCategory: product.productCategory,
      price: product.price,
      availablity: product.availablity,
      imageUrl: product.imageUrl,
      offer: product.offer,
      _id: product._id,
    }));

  // filter the product whose productCategoryStatus == "Top Rated"
  const topRatedList: ProductInfo[] = productList
    .filter((product) => product.productCategoryStatus.includes("Top Rated"))
    .map((product) => ({
      productName: product.productName,
      productCategoryStatus: product.productCategoryStatus,
      productCategory: product.productCategory,
      price: product.price,
      availablity: product.availablity,
      imageUrl: product.imageUrl,
      offer: product.offer,
      _id: product._id,
    }));

  return (
    <div className="product-box">
      {/* - PRODUCT MINIMal  */}

      <div className="product-minimal">
        {newArrivalList.length > 0 ? (
          <div className="product-showcase">
            <h2 className="title">New Arrival</h2>
            <div className="showcase-wrapper has-scrollbar">
              <div className="showcase-container">
                {newArrivalList.map((product, index) => (
                  <NavLink
                    to={`/product/${product.productCategory}/${product.productName}`}
                    key={index}
                  >
                    <ProductCart productDescription={product} key={index} />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        {trendingList.length > 0 ? (
          <div className="product-showcase">
            <h2 className="title">Trending</h2>
            <div className="showcase-wrapper has-scrollbar">
              <div className="showcase-container">
                {trendingList.map((product, index) => (
                  <NavLink
                    to={`/product/${product.productCategory}/${product.productName}`}
                    key={index}
                  >
                    <ProductCart productDescription={product} />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        {topRatedList.length > 0 ? (
          <div className="product-showcase">
            <h2 className="title">Top Rated</h2>
            <div className="showcase-wrapper has-scrollbar">
              <div className="showcase-container">
                {topRatedList.map((product, index) => (
                  <NavLink
                    to={`/product/${product.productCategory}/${product.productName}`}
                    key={index}
                  >
                    <ProductCart productDescription={product} key={index} />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
