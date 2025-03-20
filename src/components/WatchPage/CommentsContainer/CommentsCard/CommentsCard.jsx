import React, { useEffect, useState } from 'react';
import './CommentsCard.css';

const CommentsCard = ({ commentInfo }) => {

    if(!commentInfo.snippet) return;

    const { snippet } = commentInfo;
    const { publishedAt } = snippet?.topLevelComment?.snippet;
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
        <div className='comments-card'>
            <div className='comment-author-image'>
                <img alt='avatar' src={`${snippet?.topLevelComment?.snippet.authorProfileImageUrl}`} />
            </div>
            <div className='comment-author-description'>
                <div className='comment-author'>
                    {snippet?.topLevelComment?.snippet.authorDisplayName}
                    <span className='comment-published-at'>{daysAgo}</span>
                </div>
                <div className='comment-description'>
                    {snippet?.topLevelComment?.snippet.textDisplay}
                </div>
                <div className='like-count'>
                    <svg fill='white' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg>
                    {snippet?.topLevelComment?.snippet.likeCount > 1000 ? snippet?.topLevelComment?.snippet.likeCount / 1000 + 'K' : snippet?.topLevelComment?.snippet.likeCount}
                </div>
            </div>
        </div>
    )
}

export default CommentsCard