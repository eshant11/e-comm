import { useEffect, useState } from "react";
import { SearchSharp } from "react-ionicons";
import { ProductInfo } from "../interface";
import _, { debounce } from "lodash"; // import Lodash
// import Product from "../Product/Product";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { fetchProductsBySearch } from "../../Redux/Reducer/searchedProduct";

const SearchFilter = () => {
  const dispatch = useAppDispatch();

  const searchedList = useAppSelector(
    (state: RootState) => state.search.searchResults
  );
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // const debouncedFetch = debounce((searchProduct) => {
  //   dispatch(fetchProductsBySearch(searchProduct));
  // }, 3000); // Debounce the search by 500ms

  const handleDebounce = (searchProduct: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (searchProduct.trim() !== "" || searchedList == null) {
      const newTimeoutId = setTimeout(() => {
        dispatch(fetchProductsBySearch(searchProduct));
      }, 2000);
      setTimeoutId(newTimeoutId);
    }
  };

  useEffect(() => {
    if (searchProduct) {
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
        />
        <button className="search-btn">
          <SearchSharp color={""} title={""} />
        </button>
      </div>
    </>
  );
};

export default SearchFilter;
