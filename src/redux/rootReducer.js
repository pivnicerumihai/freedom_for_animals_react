import shopReducer from "./reducers/Shop.reducer";
import {  combineReducers } from "redux";

import {persistReducer} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
    key:`root`,
    storage: sessionStorage,
    whitelist: ['shop']
}

const rootReducer = combineReducers({
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);