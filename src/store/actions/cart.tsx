
// import { CART } from '../types';

// const addCartItem = (product: object) => {
//     return function (dispatch, getState) {
//         const previousData = getState().cart
//         const listProductsUpdated = [...previousData.cart, { ...product, checked: true }]
//         dispatch({
//             type: CART,
//             data: listProductsUpdated
//         })
//     }
// }

// const removeCartItem = (product: any) => {
//     return function (dispatch, getState) {
//         const previousData = getState().cart
//         const listProductsUpdated = previousData.cart.map((prod: any) => product.id === prod.id ? { ...prod, checked: false } : prod)
//         dispatch({
//             type: CART,
//             data: listProductsUpdated
//         })
//     }
// }

// export default {
//     addCartItem,
//     removeCartItem
// }
