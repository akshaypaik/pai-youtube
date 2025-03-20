import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "header",
    initialState: {
        showSideBar: true,
        isLivePage: false
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
        },
        setLivePageFlag: (state, action) => {
            state.isLivePage = action.payload;
        }
    }
});

export default appSlice.reducer;

export const { toggleSideBar, closeSideBar, openSideBar, setLivePageFlag } = appSlice.actions;