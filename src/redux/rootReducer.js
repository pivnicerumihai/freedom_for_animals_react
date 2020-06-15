import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage: sessionStorage,
    whitelist:[]
}

const rootReducer = combineReducers({

});

export default persistReducer(persistConfig,rootReducer);