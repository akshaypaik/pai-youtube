import { createSlice } from "@reduxjs/toolkit";

const apiCacheSlice = createSlice({
    name: "apiCache",
    initialState: {
        mostPopularVideos: {},
        watchVideoDetails: {},
        watchVideoComments: {},
        watchVideoSuggestions: {},
        liveVideos: {}
    },
    reducers: {
        updateMostPopularVideosCache: (state, action) => {
            state.mostPopularVideos = action.payload;
        },
        updateWatchVideoDetailsCache: (state, action) => {
            if (!state.watchVideoDetails[action.payload.videoId]) {
                state.watchVideoDetails[action.payload.videoId] = action.payload.videoDetails;
            }
        },
        updateWatchVideoCommentDetailsCache: (state, action) => {
            if (!state.watchVideoComments[action.payload.videoId]) {
                state.watchVideoComments[action.payload.videoId] = action.payload.commentDetails;
            }
        },
        updateWatchVideoSuggestionDetailsCache: (state, action) => {
            if (!state.watchVideoSuggestions[action.payload.videoId]) {
                state.watchVideoSuggestions[action.payload.videoId] = action.payload.suggestionDetails;
            }
        },
        updateLiveVideosCache: (state, action) => {
            state.liveVideos = action.payload;
        }
    }
});

export default apiCacheSlice.reducer;

export const {
    updateMostPopularVideosCache,
    updateWatchVideoDetailsCache,
    updateWatchVideoCommentDetailsCache,
    updateWatchVideoSuggestionDetailsCache,
    updateLiveVideosCache
} = apiCacheSlice.actions; 