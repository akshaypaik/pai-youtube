import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import watchReducer from './watchSlice';

const appStore = configureStore({
    reducer: {
        app: appReducer,
        watch: watchReducer
    }
})

export default appStore;