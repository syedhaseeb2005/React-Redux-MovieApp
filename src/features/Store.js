import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from '../features/Movies/MovieSlice.js'

export const store = configureStore({
    reducer :{
        movies : MovieSlice
    }
})