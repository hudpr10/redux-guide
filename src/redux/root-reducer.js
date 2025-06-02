import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart-products/reducer";

// Armazena todos os reducers da aplicação
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default rootReducer;
