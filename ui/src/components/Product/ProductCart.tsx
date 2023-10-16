import { NavLink } from "react-router-dom";
import { ProductInfo } from "../interface";
interface ProductCartProps {
  productDescription: ProductInfo;
}

const ProductCart = (props: ProductCartProps) => {
  const productDescription = props.productDescription;

  return (
    <div className="showcase">
      <NavLink to="#" className="showcase-img-box">
        <img
          src={productDescription.imageUrl}
          alt="sweet"
          width="70"
          className="showcase-img"
        />
      </NavLink>

      <div className="showcase-content">
        <NavLink to="#">
          <h4 className="showcase-title">{productDescription.productName}</h4>
        </NavLink>

        <NavLink to="#" className="showcase-category">
          {productDescription.productCategory}
        </NavLink>

        <div className="price-box">
          <p className="price">₹{productDescription.price}</p>
          <del>₹{productDescription.offer}</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
