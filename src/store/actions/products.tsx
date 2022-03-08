import services from '../../services';
import { CART, PRODUCTS_LIST } from '../types';

const getProductsList = () => async (dispatch) => {
    const products = await services.produtos.getProductos();
    dispatch({
        type: PRODUCTS_LIST,
        name: products.map(item => ({ ...item, checked: false }))
    })
}

const addProductCart = (product: object) => async (dispatch, getState) => {
    const products = getState().products.productsList
    const previousDataCart = getState().cart.cart
    const productsListUpdated = products.map(item => item.id === product.id ? { ...item, checked: true } : item)

    dispatch({
        type: CART,
        data: [...previousDataCart, { ...product, checked: true }]
    })

    dispatch({
        type: PRODUCTS_LIST,
        name: productsListUpdated
    })
}

const removeProductCart = (product) => async (dispatch, getState) => {
    const products = getState().products.productsList
    const previousDataCart = getState().cart.cart

    const previousDataCartUpdated = previousDataCart.filter(item => item.id != product.id)

    const productsListUpdated = products.map(item => item.id === product.id ? { ...item, checked: false } : item)

    dispatch({
        type: CART,
        data: previousDataCartUpdated
    })

    dispatch({
        type: PRODUCTS_LIST,
        name: productsListUpdated
    })
}

export default {
    getProductsList,
    addProductCart,
    removeProductCart
}