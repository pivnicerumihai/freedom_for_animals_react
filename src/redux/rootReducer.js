import {persistReducer} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import shopReducer from "./reducers/Shop.reducer";
import {  combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage: sessionStorage,
    whitelist: ['shopReducer']
}

const rootReducer = combineReducers({
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);