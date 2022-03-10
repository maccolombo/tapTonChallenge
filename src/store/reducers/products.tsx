import { PRODUCTS_LIST } from '../types';

const initialstate = {
    productsList: [],
};

type Action = {
    type: string,
    data?: string
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case PRODUCTS_LIST:
            return {
                ...state,
                productsList: action.data,
            }

        default:
            return state;
    }
};