import { useEffect, useState } from "react";
import { SearchSharp } from "react-ionicons";
import { ProductInfo } from "../interface";
import _ from "lodash"; // import Lodash

const SearchFilter = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [searchResults, setSearchResults] = useState<ProductInfo[] | undefined>(
    []
  );

  //to fecth all the products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/search");
        const data: ProductInfo[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
    if (searchProduct !== "") {
      console.log(searchResults);
    }
  }, [searchResults]);

  const handleSearch = () => {
    // Use Lodash's filter and includes functions for case-insensitive search
    const results: ProductInfo[] | undefined = _.filter(
      products,
      (product: ProductInfo) =>
        _.includes(
          product.productName && product.productName.toLowerCase(),
          searchProduct.toLowerCase()
        ) ||
        _.includes(
          product.productCategory && product.productCategory.toLowerCase(),
          searchProduct.toLowerCase()
        )
    );
    setSearchResults(results);
    // console.log(results);
  };

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

        <button
          className="search-btn"
          onClick={() => {
            handleSearch();
          }}
        >
          <SearchSharp color={""} title={""} />
        </button>
      </div>
    </>
  );
};

export default SearchFilter;
