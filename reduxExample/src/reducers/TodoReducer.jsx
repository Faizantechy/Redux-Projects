import { createSlice } from "@reduxjs/toolkit";


const initialState = ({
    
    todos:[]

})


const todoSlice = createSlice({
    
    name: 'todos',
    initialState,
    reducers: {
        
        addTask: (state, action) => {

            state.todos.push(action.payload)
            
        },
        
        removeTask: (state, action) => {

            
            state.todos.splice(action.payload,1)
            

        }

    }

})


export const { addTask,removeTask } = todoSlice.actions
export default todoSlice.reducer