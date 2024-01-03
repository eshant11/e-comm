import { Request, Response } from "express";
import {
  addItemToCart,
  getCartItems,
  removeItemFromCart,
  updateProductQuantity,
} from "../service/cartService";

export const addItem = async (req: Request, res: Response) => {
  try {
    const { email, productId, productQuantity } = req.body;

    const cart = await addItemToCart(email, productId, productQuantity);

    return res.status(200).json(cart);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateQuantity = async (req: Request, res: Response) => {
  try {
    const { email, productId, newQuantity } = req.body;

    const cart = await updateProductQuantity(email, productId, newQuantity);

    return res.status(200).json(cart);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const { email, productId } = req.body;

    const cart = await removeItemFromCart(email, productId);

    return res.status(200).json(cart);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//get the item in the cart of current user
export const getCart = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const cartItems = await getCartItems(email as string);

    return res.status(200).json(cartItems);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
