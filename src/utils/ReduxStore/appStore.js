import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import watchReducer from './watchSlice';
import searchReducer from './searchSlice';
import apiCahceReducer from './apiCacheSlice';

const appStore = configureStore({
    reducer: {
        app: appReducer,
        watch: watchReducer,
        search: searchReducer,
        apiCache: apiCahceReducer
    }
})

export default appStore;