import api from "../api";

const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";
const authenticationApi = api.create({ baseUrl });

const getProductos = async () => {
    return await authenticationApi.get(`/?brand=maybelline`);
};


export default { getProductos };
