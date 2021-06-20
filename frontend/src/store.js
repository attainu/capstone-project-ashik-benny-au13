import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {productsReducer} from'./reducers/productReducers';
import {productsDetailsReducer} from'./reducers/productReducers';
import {authReducer,userReducer,forgotPasswordReducer} from'./reducers/userReducers';


const reducer = combineReducers({
    product : productsReducer,
    productDetails : productsDetailsReducer,
    auth : authReducer,
    user : userReducer,
    forgotPassword : forgotPasswordReducer

});

let intialState = {}
const middlware = [thunk];
const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middlware)))

export default store 