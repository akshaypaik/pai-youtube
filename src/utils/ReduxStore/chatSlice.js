import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../constants/constants";

const chatSlice=  createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addChatMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export default chatSlice.reducer;

export const { addChatMessage } = chatSlice.actions;