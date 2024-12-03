import axios from "axios";
import { getPets } from "../reducers/PetsReducer";


export const petsApiCall = ()=>async (dispatch,getState) => {
    
    const response = await axios.get('https://www.freetestapi.com/api/v1/animals')
    ///Synchronus:
    dispatch(getPets(response.data))
    

}