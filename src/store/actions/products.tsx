import services from '../../services';
import { PRODUCTS_LIST, } from '../types';

// const setProductsList = (name: string) => ({    
//     type: PRODUCTS_LIST,
//     name,
// });
const setProductsList = (name: string) => {
    //     type: PRODUCTS_LIST,
    // const name = await services.produtos.getProductos()
    // console.log(name)
    return ({
        type: PRODUCTS_LIST,
        name,
    })
}

export default {
    setProductsList,
};