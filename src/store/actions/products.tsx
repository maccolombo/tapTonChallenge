import services from '../../services';
import { PRODUCTS_LIST } from '../types';

const setProductsList = () => async dispatch => {
    const response = await services.produtos.getProductos()

    dispatch({
        type: PRODUCTS_LIST,
        name: response
    })
}

export default {
    setProductsList
}