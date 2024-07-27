import { combineReducers,applyMiddleware,compose,createStore as reduxCreateStore } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { CartsReducer } from "../carts/reducers";
import { ItemsReducer } from "../items/reducers";
export default function createStore(history){
    return reduxCreateStore(
        combineReducers(
            {
                router:connectRouter(history),
                items:ItemsReducer,
                carts:CartsReducer
            }
        ),compose(applyMiddleware(routerMiddleware(history),thunk))
    )
}
