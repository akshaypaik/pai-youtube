import React, { useEffect, useState } from 'react';
import './VideoContainer.css';
import { YOUTUBE_MOST_POPULAR_VIDEO } from '../../utils/constants/apiConstants';
import VideoCard from './VideoCard/VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [popularVideos, setPopularVideos] = useState([]);

  const fetchPopularVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEO);
    const jsonData = await data.json();
    setPopularVideos(jsonData.items);
  }

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  return (
    <div className='video-container'>
      {/* <VideoCard videoInfo={popularVideos[0]} /> */}
      {popularVideos.map((video) =>
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard videoInfo={video} />
        </Link>)}
    </div>
  )
}

export default VideoContainer