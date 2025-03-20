import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "header",
    initialState: {
        showSideBar: true
    },
    reducers: {
        toggleSideBar: (state, action) => {
            state.showSideBar = !state.showSideBar;
        },
        closeSideBar: (state) => {
            state.showSideBar = false;
        },
        openSideBar: (state) => {
            state.showSideBar = true;
        }
    }
});

export default appSlice.reducer;

export const { toggleSideBar, closeSideBar, openSideBar } = appSlice.actions;