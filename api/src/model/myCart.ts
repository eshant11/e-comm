import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  items: {
    type: [
      {
        productId: {
          type: String,
          required: true,
        },
        productQuantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    default: [],
  },
});

//Creating a model
const Cart = mongoose.model("ProductCart", cartSchema);

export default Cart;
