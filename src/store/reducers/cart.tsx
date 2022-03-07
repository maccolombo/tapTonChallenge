import { CART } from '../types';

const initialstate = {
    cart: [],
};

type Action = {
    type: string,
    data?: object
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case CART:
            return {
                ...state,
                cart: action.data,
            }

        default:
            return state;
    }
};