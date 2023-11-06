import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SimilarProductSuggestionProps = {
  category: string | undefined;
};

const SimilarProductSuggestion: React.FC<SimilarProductSuggestionProps> = ({
  category,
}) => {
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 2 seconds
  };

  return (
    // <div className="category">
    <div className="container">
      {/* <div className="category-item-container has-scrollbar"> */}
      <Slider {...settings} className="slider">
        {similarProducts.map((product) => (
          <div key={product._id} className="category-item">
            <div className="category-img-box">
              <img src={product.imageUrl} alt="" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">{product.productName}</h3>

                <p className="category-item-amount">₹{product.price}</p>
              </div>

              <a href="#" className="category-btn">
                Show all
              </a>
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
