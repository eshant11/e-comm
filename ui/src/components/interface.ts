export interface ProductInfo {
  productName: String;
  productCategory: string;
  productCategoryStatus: String[];
  price: number;
  availablity: Boolean;
  imageUrl: string;
  offer: number;
  _id: string;
}
export interface FormData {
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirm_Password: string;
  gender: string; // Define the valid options for gender
}
