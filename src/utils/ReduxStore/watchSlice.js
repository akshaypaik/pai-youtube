import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
    name: "watch",
    initialState: {
        currentWatchVideo: {}
    },
    reducers: {
        updateCurrentWatchVideo: (state, action) => {
            state.currentWatchVideo = action.payload;
        }
    }
});

export default watchSlice.reducer;

export const { updateCurrentWatchVideo } = watchSlice.actions;