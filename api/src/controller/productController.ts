import Product from "../model/product";
import { Request, Response } from "express";
import { getProductById } from "../service/productService";
// Get All products based on search
export const searchProducts = async (req: Request, res: Response) => {
  try {
    // Get the search query from the query parameters
    const searchQuery = req.query.q;

    // If there is no search query, return all products
    if (!searchQuery) {
      const allProducts = await Product.find();
      return res.json(allProducts);
    }

    // Use a regex to search for products with a name or category that includes the search query
    else {
      const searchResults = await Product.find({
        $or: [
          { productName: { $regex: searchQuery, $options: "i" } },
          { productCategory: { $regex: searchQuery, $options: "i" } },
        ],
      });

      res.json(searchResults);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Sweet products
export const getSweetProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ productCategory: "sweet" });
    console.log(products.length);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//Get namkeen Product
export const getNamkeenProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ productCategory: "namkeen" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
//Get cookies Product
export const getCookiesProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ productCategory: "cookies" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
//Get cakes Product
export const getCakesProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ productCategory: "cakes" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProductFromCart = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await getProductById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
