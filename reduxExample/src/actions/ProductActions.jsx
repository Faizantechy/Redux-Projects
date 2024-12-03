import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";


export const getAsyncProducts = ()=>async (dispatch,getData) => {
    const response = await axios.get('https://fakestoreapi.com/products')

    dispatch(getProducts(response.data))
    
    
    
}