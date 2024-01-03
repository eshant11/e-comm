import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProductInfo } from "../interface";
import { Star, StarOutline, Trash } from "react-ionicons";
import {
  removeItem,
  itemCountHandle,
  fetchCartData,
} from "../../Redux/Reducer/cart";
import axios from "axios";

interface ProductCount {
  [productId: string]: number;
}
const MyCart = () => {
  const cartItemCount = useAppSelector((state) =>
    state.cart.cartDetails.product.reduce((acc, item) => {
      acc[item.productId] = item.quantity;
      return acc;
    }, {} as ProductCount)
  );
  console.log(cartItemCount, "cartItemCount");

  const currentUser = useAppSelector((state) => state.app.currentUser?.email);
  const [itemCount, setItemCount] = useState<ProductCount>(cartItemCount);
  const totalCount = useAppSelector((state) => state.cart.itemCount);
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);
  const dispatch = useAppDispatch();

  const increaseItem = async (productId: string) => {
    try {
      const updatedQuantity = (itemCount[productId] || 1) + 1;

      // Make Axios request to update quantity on the server
      await axios.post("http://localhost:8080/api/cart/updateQuantity", {
        email: currentUser, // Replace with the actual user's email or get it from the authentication state
        productId: productId,
        newQuantity: updatedQuantity,
      });

      // Update the local state with the new quantity
      setItemCount(cartItemCount);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const decreaseItem = async (productId: string) => {
    try {
      const updatedQuantity = Math.max((itemCount[productId] || 1) - 1, 1);

      // Make Axios request to update quantity on the server
      await axios.post("http://localhost:8080/api/cart/updateQuantity", {
        email: currentUser, // Replace with the actual user's email or get it from the authentication state
        productId: productId,
        newQuantity: updatedQuantity,
      });

      // Update the local state with the new quantity
      setItemCount(cartItemCount);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  useEffect(() => {
    // to calculate the total  count of all the value of the items from the object
    //   {
    //     const totalCount = Object.values(itemCount).reduce(
    //       (total: any, count: any) => total + count,
    //       0 //initial value 0
    //     );
    //     // Dispatch the itemCountHandle action when itemCount changes
    //     dispatch(itemCountHandle(totalCount));
    //   }
    // }, [itemCount, dispatch]

    //To fecth the cart data of current user
    const fetchData = async () => {
      try {
        if (isLoggedIn) {
          const payload = await dispatch(fetchCartData(currentUser));
          // Additional logic after fetching cart data if needed
          console.log("Cart data fetched successfully:", payload);
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData(); // Immediately call the asynchronous function
  }, [isLoggedIn]);

  const cartItems: ProductInfo[] = useAppSelector(
    (state) => state.cart.cartItems
  );
  console.log(cartItems);

  const calculateTotalPrice = () => {
    if (cartItems.length === 0) {
      return "0.0";
    } else {
      return cartItems
        .reduce(
          (total, item) => total + item.price * (itemCount[item._id] || 0),
          0
        )
        .toFixed(2);
    }
  };

  // To delete the item from the cart
  const deleteItem = async (productId: string) => {
    try {
      // Make Axios request to remove item from the server
      await axios.post("http://localhost:8080/api/cart/removeItem", {
        email: currentUser, // Replace with the actual user's email or get it from the authentication state
        productId: productId,
      });

      // Dispatch action to remove item from the Redux store
      dispatch(removeItem(productId));

      // Create a copy of the itemCount state
      const updatedItemCount = { ...itemCount };

      // Set the count for the deleted item to 0
      delete updatedItemCount[productId];

      // Update the state with the new itemCount
      setItemCount(updatedItemCount);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };
  return (
    <div className="my-cart">
      <h1>Your Shopping Cart</h1>
      <div className="product-grid">
        {cartItems.map((item) => (
          <div key={item._id} className="showcase">
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
                <button onClick={() => decreaseItem(item._id)}>-</button>
                <input
                  type="number"
                  // placeholder="1"
                  value={itemCount[item._id] || 1}
                />
                <button onClick={() => increaseItem(item._id)}>+</button>
              </div>
              <button
                className="remove-btn"
                onClick={() => deleteItem(item._id)}
              >
                <Trash color={"hsl(0, 100%, 70%)"} title={""} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((items) => (
              <tr key={items._id}>
                <td>{items.productName}</td>
                <td>{itemCount[items._id] ? itemCount[items._id] : 1}</td>
                <td>${items.price}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td>Total:</td>
              <td>{totalCount}</td>
              <td>${calculateTotalPrice()}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Your Cart Is Empty</p>
      )}
    </div>
  );
};

export default MyCart;
