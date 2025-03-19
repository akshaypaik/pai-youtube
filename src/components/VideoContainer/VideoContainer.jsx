import React, { useEffect, useState } from 'react';
import './VideoContainer.css';
import { YOUTUBE_MOST_POPULAR_VIDEO } from '../../utils/constants/apiConstants';
import VideoCard from './VideoCard/VideoCard';

const VideoContainer = () => {

  const [popularVideos, setPopularVideos] = useState([]);

  const fetchPopularVideos = async() => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEO);
    const jsonData = await data.json();
    console.log("most popular videos data: ", jsonData);
    setPopularVideos(jsonData.items);
  }

  useEffect(() => {
    fetchPopularVideos();
  }, []);


  return (
    <div className='video-container'>
      {/* <VideoCard videoInfo={popularVideos[0]} /> */}
      {popularVideos.map((video) => <VideoCard key={video.id} videoInfo={video} /> )}
    </div>
  )
}

export default VideoContainer