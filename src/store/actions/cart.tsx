
import { CART } from '../types';

const setCartItem = (value) => {
    return function (dispatch, getState) {
        const previousData = getState().cart
        const newData = [...previousData.cart, { ...value, checked: true }]
        dispatch({
            type: CART,
            data: newData
        })
    }
}

const removeCartItem = (value) => {
    console.log("value: ", value)
    return function (dispatch, getState) {
        const previousData = getState().cart
        // console.log("previousData: ", previousData.cart)
        const r = previousData.cart.filter((item, index) => {
            if (item.index === index) {
                return { ...item, checked: !item.checked }
            }
        })
        dispatch({
            type: CART,
            data: r
        })
    }
}

export default {
    setCartItem,
    removeCartItem
}
