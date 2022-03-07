import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';


const appReducer = combineReducers({
    products,
    cart
});

export default appReducer;

export type State = ReturnType<typeof Object>