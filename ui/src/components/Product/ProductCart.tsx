import { ProductInfo } from "../interface";
interface ProductCartProps {
  productDescription: ProductInfo;
}

const ProductCart = (props: ProductCartProps) => {
  const productDescription = props.productDescription;

  return (
    <div className="showcase">
      <a href="#" className="showcase-img-box">
        <img
          src={productDescription.imageUrl}
          alt="sweet"
          width="70"
          className="showcase-img"
        />
      </a>

      <div className="showcase-content">
        <a href="#">
          <h4 className="showcase-title">{productDescription.productName}</h4>
        </a>

        <a href="#" className="showcase-category">
          {productDescription.productCategory}
        </a>

        <div className="price-box">
          <p className="price">₹{productDescription.price}</p>
          <del>₹{productDescription.offer}</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
