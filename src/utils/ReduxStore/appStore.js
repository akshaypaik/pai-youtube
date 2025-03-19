import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import watchReducer from './watchSlice';
import searchReducer from './searchSlice';

const appStore = configureStore({
    reducer: {
        app: appReducer,
        watch: watchReducer,
        search: searchReducer
    }
})

export default appStore;