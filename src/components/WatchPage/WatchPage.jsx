import React, { useEffect, useState } from 'react';
import './WatchPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from '../../utils/ReduxStore/appSlice';
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_CHANNEL_IMAGE_USING_ID, YOUTUBE_VIDEO_COMMENTS_USING_ID, YOUTUBE_VIDEO_DETAILS_USING_ID, YOUTUBE_VIDEO_SUGGESTION_USING_CATEGORY_ID, YOUTUBE_VIDEO_SUGGESTIONS_USING_ID } from '../../utils/constants/apiConstants';
import { YOUTUBE_API_KEY } from '../../utils/constants/keyConstants';
import CommentsContainer from './CommentsContainer/CommentsContainer';
import VideoCard from '../VideoContainer/VideoCard/VideoCard';
import { updateWatchVideoChannelDetailsCache, updateWatchVideoCommentDetailsCache, updateWatchVideoDetailsCache, updateWatchVideoSuggestionDetailsCache } from '../../utils/ReduxStore/apiCacheSlice';
import LiveChat from '../LivePage/LiveChat/LiveChat';
import { calculateDaysAgo, viewCountConvertor } from '../../utils/helper';

const WatchPage = () => {

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const [currentWatchVideo, setCurrentWatchVideo] = useState({});
    const [videoComments, setVideoComments] = useState([]);
    const [suggestionVideos, setSuggestionVideos] = useState([]);
    const [videoChannelDetails, setVideoChannelDetails] = useState(null);

    const isLivePage = useSelector((store) => store.app.isLivePage);
    const watchVideoCache = useSelector((store) => store.apiCache.watchVideoDetails);
    const watchCommentsCache = useSelector((store) => store.apiCache.watchVideoComments);
    const watchSuggestionsCache = useSelector((store) => store.apiCache.watchVideoSuggestions);
    const watchChannelCache = useSelector((store) => store.apiCache.watchVideoChannelDetails);
    // let currentWatchVideo = useSelector((store) => store.watch.currentWatchVideo);

    const fetchVideoDetails = async () => {
        const result = await fetch(`${YOUTUBE_VIDEO_DETAILS_USING_ID}${searchParams.get("v")}&key=${YOUTUBE_API_KEY}`);
        const resultJson = await result.json();
        setCurrentWatchVideo(resultJson.items[0]);
        dispatch(updateWatchVideoDetailsCache({ videoId: `${searchParams.get("v")}`, videoDetails: resultJson.items[0] }));
    }

    const fetchVideoComments = async () => {
        const result = await fetch(`${YOUTUBE_VIDEO_COMMENTS_USING_ID}${searchParams.get("v")}&maxResults=50&key=${YOUTUBE_API_KEY}`);
        const resultJson = await result.json();
        setVideoComments(resultJson.items);
        dispatch(updateWatchVideoCommentDetailsCache({ videoId: `${searchParams.get("v")}`, commentDetails: resultJson.items }));
    }

    const fetchVideoSuggestions = async () => {
        const result = await fetch(`${YOUTUBE_VIDEO_SUGGESTIONS_USING_ID}${searchParams.get("v")}&type=video&maxResults=10&key=${YOUTUBE_API_KEY}`);
        const resultJson = await result.json();
        const resultCategory = await fetch(`${YOUTUBE_VIDEO_SUGGESTION_USING_CATEGORY_ID}${resultJson.items[0].snippet.categoryId}&maxResults=10&key=${YOUTUBE_API_KEY}`);
        const resultCategoryJson = await resultCategory.json();
        setSuggestionVideos(resultCategoryJson.items);
        console.log("video suggestions: ", resultCategoryJson.items);
        dispatch(updateWatchVideoSuggestionDetailsCache({ videoId: `${searchParams.get("v")}`, suggestionDetails: resultCategoryJson.items }));
    }

    const fetchChannelDetails = async () => {
        if (currentWatchVideo?.snippet?.channelId) {
            const result = await fetch(`${YOUTUBE_CHANNEL_IMAGE_USING_ID}${currentWatchVideo?.snippet?.channelId}&key=${YOUTUBE_API_KEY}`);
            const resultJson = await result.json();
            if (resultJson?.items?.length > 0) {
                setVideoChannelDetails(resultJson?.items[0]);
                dispatch(updateWatchVideoChannelDetailsCache({ channelId: `${currentWatchVideo?.snippet?.channelId}`, channelDetails: resultJson?.items[0] }));
            }
        }
    }

    useEffect(() => {
        dispatch(closeSideBar());
        if (!watchVideoCache[`${searchParams.get("v")}`]) {
            fetchVideoDetails();
        } else {
            setCurrentWatchVideo(watchVideoCache[`${searchParams.get("v")}`]);
        }
        if (!watchCommentsCache[`${searchParams.get("v")}`]) {
            fetchVideoComments();
        } else {
            setVideoComments(watchCommentsCache[`${searchParams.get("v")}`]);
        }
        if (!watchSuggestionsCache[`${searchParams.get("v")}`]) {
            fetchVideoSuggestions();
        } else {
            setSuggestionVideos(watchSuggestionsCache[`${searchParams.get("v")}`]);
        }
    }, [searchParams]);

    useEffect(() => {
        if (!watchChannelCache[`${currentWatchVideo?.snippet?.channelId}`]) {
            fetchChannelDetails();
        } else {
            setVideoChannelDetails(watchChannelCache[`${currentWatchVideo?.snippet?.channelId}`]);
        }
    }, [currentWatchVideo]);

    return (
        <div className='watch-container'>
            <div>
                <iframe width="1200" height="600"
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
                <div className='watch-video-title'>{currentWatchVideo?.snippet?.title}</div>
                <div className='video-channel-desc-container'>
                    <img src={videoChannelDetails?.snippet?.thumbnails?.default?.url} />
                    <div className='watch-video-channel-name-count'>
                        <div className='watch-video-channel-title'>{currentWatchVideo?.snippet?.channelTitle}</div>
                        <div className='watch-video-channel-subs-count'>{viewCountConvertor(videoChannelDetails?.statistics?.subscriberCount)} subscribers</div>
                    </div>
                </div>
                <div className='watch-video-description-container'>
                    <div className='watch-video-view-count-published-at'>
                        <div className='watch-video-view-count'>{viewCountConvertor(currentWatchVideo?.statistics?.viewCount)} views</div>
                        <div className='watch-video-published-at'>{calculateDaysAgo(currentWatchVideo?.snippet?.publishedAt)}</div>
                    </div>
                    <div className='watch-video-description'>{currentWatchVideo?.snippet?.description}</div>
                    <span>&nbsp;</span>
                    <span style={{ cursor: 'pointer' }}>...more</span>
                </div>
                {!isLivePage && <>
                    <div className='comments-container'>
                        {parseInt(currentWatchVideo?.statistics?.commentCount).toLocaleString()} Comments
                    </div>
                    <CommentsContainer commentsList={videoComments} />
                </>}
            </div>
            {!isLivePage && <div className='suggestion-video-container'>
                <h3>Suggestions</h3>
                {/* {suggestionVideos.map((video) => <VideoCard key={video.id} videoInfo={video} />)} */}
                {suggestionVideos?.map((video) => <Link to={`/watch?v=${video.id}`} key={video.id}>
                    <VideoCard videoInfo={video} />
                </Link>)}
            </div>}
            {isLivePage &&
                <LiveChat />
            }
        </div>
    )
}

export default WatchPage;