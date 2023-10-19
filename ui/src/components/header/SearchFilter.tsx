import { useEffect, useState } from "react";
import { SearchSharp } from "react-ionicons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  fetchProductsBySearch,
  clearSearchResults,
} from "../../Redux/Reducer/searchedProduct";

const SearchFilter = () => {
  const dispatch = useAppDispatch();

  const searchedList = useAppSelector(
    (state: RootState) => state.search.searchResults
  );
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleDebounce = (searchProduct: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      dispatch(fetchProductsBySearch(searchProduct));
    }, 1000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    if (!searchProduct) {
      clearTimeout(timeoutId as NodeJS.Timeout); //On long backspace keypress it won't show last letter result
      dispatch(clearSearchResults());
    } else {
      handleDebounce(searchProduct);
    }
  }, [searchProduct]);

  useEffect(() => {
    console.log(searchedList);
  }, [searchedList]);

  return (
    <>
      <div className="header-search-container">
        <input
          type="search"
          name="search"
          className="search-field"
          placeholder="Enter your product name..."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          dir="auto"
        />
        <button className="search-btn">
          <SearchSharp color={""} title={""} />
        </button>
      </div>
      {searchedList.length > 0 && (
        <div className="search-results-container">
          <ul className="search-results-list">
            {searchedList.map((product) => (
              <li key={product._id} className="search-result-item">
                {/* Render product information here */}
                <h3>{product.productName}</h3>
                {/* Add more product details if needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchFilter;
