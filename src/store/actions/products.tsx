import services from '../../services';
import { PRODUCTS_LIST } from '../types';

const setProductsList = () => async dispatch => {
    const response = await services.produtos.getProductos()

    const list = response.map(item => ({ ...item, checked: false }))

    dispatch({
        type: PRODUCTS_LIST,
        name: list
    })
}

const updateList = (payload) => async (dispatch, getState) => {
    const previousData = getState().cart

    console.log(payload)

    dispatch({
        type: PRODUCTS_LIST,
        name: payload
    })
}

export default {
    setProductsList,
    updateList
}