import React, { useEffect, useState } from 'react';
import './LivePage.css';
import { YOUTUBE_VIDEO_LIVE } from '../../utils/constants/apiConstants';
import VideoCard from '../VideoContainer/VideoCard/VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLivePageFlag } from '../../utils/ReduxStore/appSlice';
import { updateLiveVideosCache } from '../../utils/ReduxStore/apiCacheSlice';

const LivePage = () => {

    const [liveVideos, setLiveVideos] = useState([]);
    const dispatch = useDispatch();
    const liveVideosCache = useSelector((store) => store.apiCache.liveVideos);

    const fetchLiveVideos = async () => {
        const result = await fetch(`${YOUTUBE_VIDEO_LIVE}`);
        const resultJson = await result.json();
        console.log("live videos data: ", resultJson);
        setLiveVideos(resultJson.items);
        dispatch(updateLiveVideosCache(resultJson.items));
    }
    const VideoCardWithLiveLabel = VideoCardLive(VideoCard);

    useEffect(() => {

        // early return with cache data to avoid api call again
        if (liveVideosCache?.length > 0) {
            setLiveVideos(liveVideosCache);
        }else{
            fetchLiveVideos();
        }

        dispatch(setLivePageFlag(true));

    }, []);


    return (
        <div className='live-page-container'>
            {liveVideos?.map((video) =>
                <Link to={`/watch?v=${video.id.videoId}`} key={video.etag}>
                    <VideoCardWithLiveLabel videoInfo={video} />
                </Link>
            )}
        </div>
    )
}

export default LivePage;

// Higher order component
export function VideoCardLive(VideoCard) {
    return (props) => {
        return (
            <div className='video-card-live'>
                <VideoCard {...props} />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}><path clipRule="evenodd" d="M5.636 5.636c.293-.293.293-.768 0-1.06-.293-.294-.768-.294-1.06 0-.976.974-1.75 2.132-2.277 3.406C1.772 9.256 1.5 10.622 1.5 12c0 1.379.272 2.744.8 4.018.527 1.274 1.3 2.432 2.275 3.407.293.293.768.293 1.061 0 .293-.293.293-.768 0-1.061-.836-.836-1.499-1.828-1.95-2.92C3.232 14.352 3 13.182 3 12s.233-2.352.685-3.444c.452-1.092 1.115-2.084 1.951-2.92Zm2.828 1.768c.293.292.293.767 0 1.06-.464.464-.832 1.016-1.083 1.622C7.129 10.693 7 11.343 7 12c0 .656.13 1.306.38 1.913.252.607.62 1.158 1.084 1.622.293.293.293.768 0 1.06-.292.294-.767.294-1.06 0-.604-.603-1.083-1.32-1.41-2.108C5.669 13.7 5.5 12.853 5.5 12c0-.854.168-1.7.495-2.488.326-.788.805-1.505 1.409-2.108.293-.293.768-.293 1.06 0Zm7.072 0c.292-.293.767-.293 1.06 0C17.816 8.623 18.5 10.276 18.5 12c0 1.724-.685 3.377-1.904 4.596-.293.293-.768.293-1.06 0-.293-.293-.293-.768 0-1.06C16.473 14.597 17 13.325 17 12s-.527-2.598-1.464-3.536c-.293-.293-.293-.768 0-1.06Zm2.828-2.829c.293-.293.768-.293 1.06 0C21.395 6.545 22.5 9.215 22.5 12s-1.106 5.456-3.075 7.425c-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.061C20.052 16.676 21 14.387 21 12s-.948-4.676-2.636-6.364c-.293-.293-.293-.768 0-1.06ZM12 14c1.105 0 2-.895 2-2 0-1.104-.895-2-2-2s-2 .896-2 2c0 1.105.895 2 2 2Z" fillRule="evenodd"></path></svg>
                    LIVE
                </button>
            </div>
        )
    }
}