import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
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

export default headerSlice.reducer;

export const { toggleSideBar } = headerSlice.actions;