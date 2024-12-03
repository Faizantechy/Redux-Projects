import axios from "axios";
import { getHomeData } from "../reducers/HomeReducers";


export const getHomeUsers=()=>async(dispatch,getData) => {
    
    const response = await axios.get('https://fakestoreapi.com/products')
    dispatch(getHomeData(response.data))
    

}