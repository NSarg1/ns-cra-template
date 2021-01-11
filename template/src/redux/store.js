import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./root-reducer";

const logger = createLogger({ collapsed: true });

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
