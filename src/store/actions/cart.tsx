
import { CART } from '../types';

const addCartItem = (product: object) => {
    return function (dispatch, getState) {
        const previousData = getState().cart
        const newData = [...previousData.cart, { ...product, checked: true }]
        dispatch({
            type: CART,
            data: newData
        })
    }
}

const removeCartItem = (product: any) => {
    console.log("product: ", product)
    return function (dispatch, getState) {
        const previousData = getState().cart
        const listProductsUpdated = previousData.cart.map((p) => product.id === p.id ? {...p, checked: false} : p)
        // const r = previousData.cart.filter((item, index) => {
        //     if (item.index === index) {
        //         return { ...item, checked: !item.checked }
        //     }
        // })
        dispatch({
            type: CART,
            data: listProductsUpdated
        })
    }
}

export default {
    addCartItem,
    removeCartItem
}
