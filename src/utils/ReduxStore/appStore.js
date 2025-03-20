import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import watchReducer from './watchSlice';
import searchReducer from './searchSlice';
import apiCahceReducer from './apiCacheSlice';
import chatReducer from './chatSlice';

const appStore = configureStore({
    reducer: {
        app: appReducer,
        watch: watchReducer,
        search: searchReducer,
        apiCache: apiCahceReducer,
        chat: chatReducer
    }
})

export default appStore;