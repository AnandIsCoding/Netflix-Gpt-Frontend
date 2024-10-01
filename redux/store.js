import {configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import NowPlayingMoviesSlice from "./NowPlayingMoviesSlice";

const store = configureStore({
    reducer: {
        user:userReducer,
        movies:NowPlayingMoviesSlice,
    },
    
    
})

export default store;