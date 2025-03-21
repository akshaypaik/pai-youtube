import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "header",
    initialState: {
        showSideBar: true,
        isLivePage: false,
        darkMode: true
    },
    reducers: {
        toggleSideBar: (state) => {
            state.showSideBar = !state.showSideBar;
        },
        closeSideBar: (state) => {
            state.showSideBar = false;
        },
        openSideBar: (state) => {
            state.showSideBar = true;
        },
        setLivePageFlag: (state, action) => {
            state.isLivePage = action.payload;
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export default appSlice.reducer;

export const { toggleSideBar, closeSideBar, openSideBar, setLivePageFlag, toggleDarkMode } = appSlice.actions;