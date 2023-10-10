import mongoose from "mongoose";

// Create a Mongoose schema for product
const productSchema = new mongoose.Schema({
  productDescription: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  productCategoryStatus: { type: [String] },
  price: {
    type: Number,
  },
  offer: {
    type: Number,
  },
  availablity: {
    type: Boolean,
  },
  imageUrl: {
    type: String,
  },
});

//Creating a model
const Product = mongoose.model("Product", productSchema);

export default Product;
