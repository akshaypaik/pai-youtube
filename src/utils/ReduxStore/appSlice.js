import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "header",
    initialState: {
        showSideBar: true
    },
    reducers: {
        toggleSideBar: (state, action) => {
            state.showSideBar = !state.showSideBar;
        }
    }
});

export default appSlice.reducer;

export const { toggleSideBar } = appSlice.actions;