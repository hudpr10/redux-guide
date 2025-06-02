import rootReducer from "./root-reducer";
import logger from 'redux-logger';

import { configureStore } from "@reduxjs/toolkit";

// Store, onde fica armazenado tudo!
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
