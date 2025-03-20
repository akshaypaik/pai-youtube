import React, { useEffect, useState } from 'react';
import './VideoContainer.css';
import { YOUTUBE_MOST_POPULAR_VIDEO } from '../../utils/constants/apiConstants';
import VideoCard from './VideoCard/VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateMostPopularVideosCache } from '../../utils/ReduxStore/apiCacheSlice';
import Error from '../Error/Error';
import { setLivePageFlag } from '../../utils/ReduxStore/appSlice';

const VideoContainer = () => {

  const [popularVideos, setPopularVideos] = useState([]);
  const dispatch = useDispatch();
  const mostPopularVideoCache = useSelector((store) => store.apiCache.mostPopularVideos);

  const fetchPopularVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEO);
    const jsonData = await data.json();
    setPopularVideos(jsonData.items);
    dispatch(updateMostPopularVideosCache(jsonData.items));
  }

  useEffect(() => {
    dispatch(setLivePageFlag(false));
    if(mostPopularVideoCache?.length > 0) {
      setPopularVideos(mostPopularVideoCache);
      return;
    }
    fetchPopularVideos();
  }, []);

  return (
    <>
    { popularVideos && popularVideos.length > 0 ? <div className='video-container'>
      {/* <VideoCard videoInfo={popularVideos[0]} /> */}
      {popularVideos?.map((video) =>
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard videoInfo={video} />
        </Link>)}
    </div> : <Error />}
    </>
  )
}

export default VideoContainer