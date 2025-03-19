import React, { useEffect, useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ videoInfo }) => {

    if (!videoInfo) return;

    console.log("video card info: ", videoInfo);
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

    return (
        <div className='video-card-container'>
            <img src={thumbnails.medium.url} />
            <ul>
                <li className='video-title'>{title}</li>
                <li className='video-channel-title'>{channelTitle}</li>
                <div className='view-count-days'>
                    <li className='video-view-count'>{statistics.viewCount > 1000 ? (statistics.viewCount / 1000).toFixed(2) + 'K' : statistics.viewCount} views</li>
                    <li>.</li>
                    <li>{daysAgo}</li>
                </div>
            </ul>
        </div>
    )
}

export default VideoCard