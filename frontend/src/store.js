import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {productsReducer} from'./reducers/productReducers'

const reducer = combineReducers({
    product:productsReducer

})

let intialState = {}
const middlware = [thunk];
const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middlware)))

export default store 