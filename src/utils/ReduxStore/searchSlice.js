import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResultCache: {}
    },
    reducers: {
        updateSearchSuggestionCache: (state, action) => {
            if(!state.searchResultCache[action.payload.searchString]){
                state.searchResultCache[action.payload.searchString] = action.payload.searchResult;
            }
        }
    }
});

export default searchSlice.reducer;

export const { updateSearchSuggestionCache } = searchSlice.actions;