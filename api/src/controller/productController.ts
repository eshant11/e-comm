import Product from "../model/product";
import { Request, Response } from "express";

// Get All products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    console.log(products.length);
    res.json(products);
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
