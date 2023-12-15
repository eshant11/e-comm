import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProductInfo } from "../interface";
import { Star, StarOutline, Trash } from "react-ionicons";
import { removeItem, itemCountHandle } from "../../Redux/Reducer/cart";

const MyCart = () => {
  const dispatch = useAppDispatch();
  const [itemCount, setItemCount] = useState<any>({});

  const increaseItem = (productId: any) => {
    setItemCount((prevCount: any) => ({
      ...prevCount,
      [productId]: (prevCount[productId] || 0) + 1,
    }));
  };

  const decreaseItem = (productId: any) => {
    setItemCount((prevCounts: any) => {
      const currentCount = prevCounts[productId] || 0;
      return {
        ...prevCounts, // shallow copy of  state
        [productId]: currentCount > 0 ? currentCount - 1 : 0,
      };
    });
  };

  useEffect(() => {
    // to calculate the total  count of aal the value of the items from the object
    const totalCount = Object.values(itemCount).reduce(
      (total: any, count: any) => total + count,
      0 //initial value 0
    );

    // Dispatch the itemCountHandle action when itemCount changes
    dispatch(itemCountHandle(totalCount));
  }, [itemCount, dispatch]);

  const cartItems: ProductInfo[] = useAppSelector(
    (state) => state.cart.cartItems
  );
  console.log(cartItems);

  const calculateTotalPrice = () => {
    if (cartItems.length === 0) {
      return "0.0";
    } else {
      return cartItems
        .reduce((total, item) => total + item.price, 0)
        .toFixed(2);
    }
  };

  // To delete the item from the cart
  const deleteItem = (index: any) => {
    dispatch(removeItem(index));

    // Create a copy of the itemCount state
    const updatedItemCount = { ...itemCount };

    // Set the count for the deleted item to 0
    updatedItemCount[index] = 0;

    // Update the state with the new itemCount
    if (itemCount[index] > 0) {
      setItemCount((itemCount[index] = updatedItemCount));
    }
  };
  return (
    <div className="my-cart">
      <h1>Your Shopping Cart</h1>
      <div className="product-grid">
        {cartItems.map((item, index) => (
          <div key={index} className="showcase">
            <div className="showcase-banner">
              <img
                src={item.imageUrl}
                alt="MEN Yarn Fleece Full-Zip Jacket"
                className="product-img default"
                width="300"
              />
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                {item.productCategory}
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  {item.productName}
                </a>
              </h3>

              <div className="showcase-rating">
                <Star color={"hsl(29, 90%, 65%)"} title={""} />
                <Star color={"hsl(29, 90%, 65%)"} title={""} />
                <Star color={"hsl(29, 90%, 65%)"} title={""} />
                <StarOutline color={"#00000"} title={""} />
                <StarOutline color={"#00000"} title={""} />
              </div>

              <div className="price-box">
                <p className="price">{item.price}</p>
                <del>{item.offer}</del>
              </div>
            </div>
            <div className="showcase-btn">
              <div className="selector">
                <button onClick={() => decreaseItem(index)}>-</button>
                <input type="number" value={itemCount[index]} />
                <button onClick={() => increaseItem(index)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => deleteItem(index)}>
                <Trash color={"hsl(0, 100%, 70%)"} title={""} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className="total-price">
          <span>Total:</span>
          <span>${calculateTotalPrice()}</span>
        </div>
      ) : (
        "Your Cart Is Empty"
      )}
    </div>
  );
};

export default MyCart;
