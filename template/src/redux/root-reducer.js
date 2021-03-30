import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { persistConfig, authPersistConfig } from "./persist-configs";

// REDUCERS
import authReducer from "./auth/auth.reducer.js";

const rootReducer = combineReducers({
   auth: persistReducer(authPersistConfig, authReducer),
});

export default persistReducer(persistConfig, rootReducer);
