import { StarOutline } from "react-ionicons";
import { Star } from "react-ionicons";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { ProductInfo } from "../interface";
import SimilarProductSuggestion from "./SimilarProductSuggestion";
import { loginComponentHandler } from "../../Redux/Reducer/appReducer";

const ProductDeatils = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

  // to access the product id from url route
  const { productId, category } = useParams();

  // getting product list from redux store
  const searchResults = useAppSelector(
    (state: RootState) => state.search.searchResults
  );

  // getting product list from redux store
  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );

  // find method to check the selected product id and category
  let selectedProduct: ProductInfo | undefined = searchResults.find(
    (product) =>
      product._id === productId && product.productCategory === category
  );

  // If product not found in search results, look in the product list
  if (!selectedProduct) {
    selectedProduct = productList.find(
      (product) =>
        product._id === productId && product.productCategory === category
    );
  }

  console.log(selectedProduct);

  return (
    <>
      <div className="product-featured">
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src={selectedProduct?.imageUrl}
                  alt="sweet"
                  className="showcase-img"
                />
              </div>

              <div className="showcase-content">
                <div className="showcase-rating">
                  <Star color={"hsl(29, 90%, 65%)"} title={""} />
                  <Star color={"hsl(29, 90%, 65%)"} title={""} />
                  <Star color={"hsl(29, 90%, 65%)"} title={""} />
                  <StarOutline color={"#00000"} title={""} />
                  <StarOutline color={"#00000"} title={""} />
                </div>

                <a href="#">
                  <h3 className="showcase-title">
                    {selectedProduct?.productName}
                  </h3>
                </a>

                <p className="showcase-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet consectetur Lorem ipsum dolor Lorem ipsum dolor sit
                  amet consectetur Lorem ipsum dolor dolor sit amet consectetur
                  Lorem ipsum dolor
                </p>

                <div className="price-box">
                  <p className="price">₹{selectedProduct?.price}</p>

                  <del>₹{selectedProduct?.offer}</del>
                </div>
                <div className="add-buy-btn">
                  <button
                    className="add-cart-btn"
                    onClick={() =>
                      !isLoggedIn && dispatch(loginComponentHandler(true))
                    }
                  >
                    add to cart
                  </button>
                  <button
                    className="buy-now-btn"
                    onClick={() =>
                      !isLoggedIn && dispatch(loginComponentHandler(true))
                    }
                  >
                    buy now
                  </button>
                </div>

                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      {selectedProduct?.availablity === true ? (
                        <b>Available</b>
                      ) : (
                        <b>Not Available</b>
                      )}
                    </p>
                  </div>

                  <div className="showcase-status-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProductSuggestion category={selectedProduct?.productCategory} />
    </>
  );
};

export default ProductDeatils;
