import { UserData } from "../../components/interface";
export interface App {
  showLogin: boolean;
  showSignUp: boolean;
  isLoggedIn: boolean;
  toggleMenu: boolean;
  currentUser?: UserData;
}
