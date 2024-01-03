// cartService.js
import Cart from "../model/myCart";

export const addItemToCart = async (
  email: string,
  productId: string,
  productQuantity = 1
) => {
  try {
    // Find the user's cart or create a new one if it doesn't exist
    let cart = await Cart.findOne({ email });

    if (!cart) {
      cart = new Cart({ email });
    }

    // Check if the product already exists in the cart
    const existingProductIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );

    if (existingProductIndex !== -1) {
      // If the product exists, increment the quantity
      cart.items[existingProductIndex].productQuantity += productQuantity;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.items.push({ productId: productId, productQuantity });
    }

    // Save the cart to the database
    await cart.save();

    return cart;
  } catch (error) {
    throw error;
  }
};

export const updateProductQuantity = async (
  email: string,
  productId: string,
  newQuantity: number
) => {
  try {
    const cart = await Cart.findOne({ email });

    if (!cart) {
      throw new Error("Cart not found");
    }

    // Find the index of the product in the cart
    const productIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );

    if (productIndex !== -1) {
      // Update the product quantity
      cart.items[productIndex].productQuantity = newQuantity;

      // Update the total count
      // cart.count = cart.items.reduce(
      //   (total, item) => total + item.productQuantity,
      //   0
      // );

      // Save the cart to the database
      await cart.save();
    } else {
      throw new Error("Product not found in the cart");
    }

    return cart;
  } catch (error) {
    throw error;
  }
};

export const removeItemFromCart = async (email: string, productId: string) => {
  try {
    // Find the user's cart based on the email
    const userCart = await Cart.findOne({ email });

    if (!userCart) {
      throw new Error("Cart not found");
    }

    // Remove the item from the cart
    userCart.items = userCart.items.filter(
      (item) => item.productId !== productId
    );

    // Save the updated cart
    await userCart.save();

    return userCart;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

//get the item in the cart of current user
export const getCartItems = async (email: string) => {
  const cart = await Cart.findOne({ email });

  return cart?.items || [];
};
