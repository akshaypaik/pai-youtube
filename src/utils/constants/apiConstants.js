import { YOUTUBE_API_KEY } from "./keyConstants";

export const YOUTUBE_MOST_POPULAR_VIDEO = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${YOUTUBE_API_KEY}`; 

export const GOOGLE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_DETAILS_USING_ID = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=`

export const YOUTUBE_VIDEO_COMMENTS_USING_ID = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId="

export const YOUTUBE_VIDEO_SUGGESTIONS_USING_ID = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id="

export const YOUTUBE_VIDEO_SUGGESTION_USING_CATEGORY_ID = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId="

export const YOUTUBE_VIDEO_LIVE = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&maxResults=10&key=${YOUTUBE_API_KEY}`

export const YOUTUBE_CHANNEL_IMAGE_USING_ID = "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=";




