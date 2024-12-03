import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import productReducer from '../reducers/ProductReducer'
import homeReducer from '../reducers/HomeReducers'
import petReducer from '../reducers/PetsReducer'
import todoReducer from '../reducers/TodoReducer'






export const store = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
        homeUsers: homeReducer,
        Pets: petReducer,
        todos: todoReducer

    },
});
