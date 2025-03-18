import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";

const appStore = configureStore({
    reducer: {
        header: headerReducer
    }
})

export default appStore;