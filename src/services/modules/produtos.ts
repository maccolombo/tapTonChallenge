import api from "../api";

const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";
const authenticationApi = api.create({ baseUrl });

const getProductos = async () => {
    try {
        return await authenticationApi.get(`/?brand=maybelline`);
    } catch (error) {
        console.log(error)
        throw error
    }
};


export default { getProductos };
