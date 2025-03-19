import React, { useEffect, useState } from 'react';
import './WatchPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from '../../utils/ReduxStore/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEO_DETAILS_USING_ID } from '../../utils/constants/apiConstants';
import { YOUTUBE_API_KEY } from '../../utils/constants/keyConstants';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [currentWatchVideo, setCurrentWatchVideo] = useState({});
    // let currentWatchVideo = useSelector((store) => store.watch.currentWatchVideo);

    const fetchVideoDetails = async() => {
        const result = await fetch(`${YOUTUBE_VIDEO_DETAILS_USING_ID}${searchParams.get("v")}&key=${YOUTUBE_API_KEY}`);
        const resultJson = await result.json();
        setCurrentWatchVideo(resultJson.items[0]);
    }

    useEffect(() => {
        dispatch(closeSideBar());
        fetchVideoDetails();
    }, []);

    return (
        <div className='watch-container'>
            <iframe width="1200" height="600"
                src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <div className='watch-video-title'>{currentWatchVideo?.snippet?.title}</div>
            <div className='watch-video-channel-title'>{currentWatchVideo?.snippet?.channelTitle}</div>
            <div className='watch-video-description-container'>
                <div className='watch-video-description'>{currentWatchVideo?.snippet?.description}</div>
                <span>&nbsp;</span>
                <span style={{cursor: 'pointer'}}>...more</span>
            </div>
            <div className='comments-container'>
                {parseInt(currentWatchVideo?.statistics?.commentCount).toLocaleString()} Comments
            </div>
        </div>
    )
}

export default WatchPage;