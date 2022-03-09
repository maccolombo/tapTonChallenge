import services from '../../services';
import { CART, PRODUCTS_LIST } from '../types';

interface Iproduct {
    qtd: number;
    screen: string;
    id: number;
    name: string;
    url: string;
    checked: boolean;
}

interface Ipayload {
    qtd: number;
    id: number;
}

const getProductsList = () => async (dispatch) => {
    const products = await services.produtos.getProductos();
    dispatch({
        type: PRODUCTS_LIST,
        name: products.map((item: Iproduct) => ({ ...item, checked: false }))
    })
}

const addProductCart = (product: Iproduct) => async (dispatch, getState) => {
    const products = getState().products.productsList
    const previousDataCart = getState().cart.cart
    const productsListUpdated = products.map((item: Iproduct) => item.id === product.id ? { ...item, checked: true } : item)

    dispatch({
        type: CART,
        data: [...previousDataCart, { ...product, checked: true, qtd: 1 }]
    })

    dispatch({
        type: PRODUCTS_LIST,
        name: productsListUpdated
    })
}


const removeProductCart = (product: Iproduct) => async (dispatch, getState) => {
    const products = getState().products.productsList
    const previousDataCart = getState().cart.cart

    const previousDataCartUpdated = previousDataCart.filter((item: Iproduct) => item.id != product.id)

    const productsListUpdated = products.map((item: Iproduct) => item.id === product.id ? { ...item, checked: false } : item)

    dispatch({
        type: CART,
        data: previousDataCartUpdated
    })

    dispatch({
        type: PRODUCTS_LIST,
        name: productsListUpdated
    })
}

const updateQuantidadeProduto = (payload: Ipayload) => async (dispatch, getState) => {
    try {
        const previousDataCart = getState().cart.cart
        const cartListUpdated = previousDataCart.map((item: Ipayload) => item.id === payload.id ? { ...item, qtd: payload.qtd } : item)

        dispatch({
            type: CART,
            data: cartListUpdated
        })

    } catch (error) {
        console.log(error)
        throw error
    }
};


export default {
    getProductsList,
    addProductCart,
    removeProductCart,
    updateQuantidadeProduto
}