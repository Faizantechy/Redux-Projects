import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = ({
    
    pets: []
    

})

const petsSlice = createSlice({
    
    name: 'pets',
    initialState,
    reducers: {
        
        getPets: (state, action) => {
          
            state.pets = action.payload;
            
            

        }

    }

})

export const { getPets } = petsSlice.actions
export default petsSlice.reducer