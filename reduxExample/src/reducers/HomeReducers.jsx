import { createSlice } from "@reduxjs/toolkit";


const initialState = ({
    
    homeUsers: []

})

const homeReducer = createSlice({
    
    name: 'HomeData',
    initialState,
    reducers: {
        
        getHomeData: (state, action) => {

state.homeUsers=action.payload            

        }

    }

})

export const { getHomeData } = homeReducer.actions;
export default homeReducer.reducer