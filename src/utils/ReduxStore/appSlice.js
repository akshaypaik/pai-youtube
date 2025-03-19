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
        }
    }
});

export default appSlice.reducer;

export const { toggleSideBar, closeSideBar } = appSlice.actions;