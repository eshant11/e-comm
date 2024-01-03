import Product from "../model/product";

interface productDetails {
  productName: String;
  productCategory: String;
  productCategoryStatus: String[];
  price: number;
  availablity: Boolean;
  imageUrl: string;
  offer: number;
}
// Get all products from the database
export const getAllProducts = async () => {
  try {
    const products = await Product.find();
    console.log(products);
    return products;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId: string) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw new Error("Error fetching product by ID");
  }
};

// Create a new product in the database
export const createProduct = async (productData: productDetails) => {
  try {
    const newProduct = new Product(productData);
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (error) {
    throw error;
  }
};
