import { combineReducers } from "redux";
import userReducer from "./user/reducer";

// Armazena todos os reducers da aplicação
const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer;
