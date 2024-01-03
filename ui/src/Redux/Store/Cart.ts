import { ProductInfo, UsercartDetails } from "../../components/interface";

export interface Cart {
  cartItems: ProductInfo[];
  itemCount: number;
  cartDetails: {
    email: string | undefined;
    product: UsercartDetails[];
  };
  status: string;
  error: any;
}
