import { ProductInfo } from "../../components/interface";

export interface Cart {
  cartItems: ProductInfo[];
  itemCount: number;
}
