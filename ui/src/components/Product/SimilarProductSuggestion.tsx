import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

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

  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
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
        </div>
      </div>
    </div>
  );
};

export default SimilarProductSuggestion;
