import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useNavigate } from "react-router-dom";

type SimilarProductSuggestionProps = {
  category: string | undefined;
};

const SimilarProductSuggestion: React.FC<SimilarProductSuggestionProps> = ({
  category,
}) => {
  const navigate = useNavigate();

  const searchResults = useAppSelector(
    (state: RootState) => state.search.searchResults
  );

  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );
  const similarProducts =
    searchResults.length > 0
      ? searchResults
      : productList.filter((product) => product.productCategory === category);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000, // 2 seconds
  };

  return (
    // <div className="category">
    <div className="container">
      {/* <div className="category-item-container "> */}
      <Slider {...settings} className="slider">
        {similarProducts.map((product) => (
          <div
            key={product._id}
            className="category-item"
            onClick={() => {
              navigate(`/product/${product.productCategory}/${product._id}`);
            }}
          >
            <div className="category-img-box">
              <img src={product.imageUrl} alt="" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">{product.productName}</h3>

                <p className="category-item-amount">₹{product.price}</p>
              </div>

              <NavLink
                to={`/product/${product.productCategory}`}
                onClick={(e) => e.stopPropagation()}
                className="category-btn"
              >
                Show all
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default SimilarProductSuggestion;
