import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { CardReducer } from "./cart/cardReducer";
import { productReducer } from "./product/productReducer";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const rootReducer=combineReducers({
    data:productReducer,
    cart:CardReducer,
    auth:authReducer
})
export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))