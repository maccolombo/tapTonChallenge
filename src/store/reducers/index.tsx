import { combineReducers } from 'redux';
import products from './products';


const appReducer = combineReducers({
    products,
});

export default appReducer;

export type State = ReturnType<typeof Object>