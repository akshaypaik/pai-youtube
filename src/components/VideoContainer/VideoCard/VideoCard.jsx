import React, { useEffect, useState } from 'react';
import './VideoCard.css';
import { updateCurrentWatchVideo } from '../../../utils/ReduxStore/watchSlice';
import { useDispatch } from 'react-redux';
import { viewCountConvertor } from '../../../utils/helper';

const VideoCard = ({ videoInfo }) => {

    if (!videoInfo) return;

    const dispatch = useDispatch();

    const { snippet, statistics } = videoInfo;
    const { title, channelTitle, thumbnails, publishedAt } = snippet;
    const [daysAgo, setDaysAgo] = useState("");

    useEffect(() => {
        calculateDaysAgo();
    }, []);

    const calculateDaysAgo = () => {
        const now = new Date();
        const past = new Date(publishedAt);
        const diffMs = now - past;

        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) { setDaysAgo(`${days} day${days > 1 ? 's' : ''} ago`); return; }
        if (hours > 0) { setDaysAgo(`${hours} hour${hours > 1 ? 's' : ''} ago`); return; }
        if (minutes > 0) { setDaysAgo(`${minutes} minute${minutes > 1 ? 's' : ''} ago`); return; }
        setDaysAgo(`${seconds} second${seconds > 1 ? 's' : ''} ago`); return;
    }

    const handleVideoClick = () => {
        dispatch(updateCurrentWatchVideo(videoInfo));
    }

    return (
        <div className='video-card-container' onClick={handleVideoClick}>
            <img src={thumbnails.medium.url} />
            <ul>
                <li className='video-title'>{title}</li>
                <li className='video-channel-title'>{channelTitle}</li>
                <div className='view-count-days'>
                    {statistics?.viewCount && <li className='video-view-count'>{viewCountConvertor(statistics?.viewCount)} views</li>}
                    {statistics?.viewCount && <span>&bull;</span>}
                    <li>{daysAgo}</li>
                </div>
            </ul>
        </div>
    )
}

export default VideoCard