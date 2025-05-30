import { createStore } from "redux";
import rootReducer from "./root-reducer";

// Store, onde fica armazenado tudo!
const store = createStore(rootReducer);

export default store;
