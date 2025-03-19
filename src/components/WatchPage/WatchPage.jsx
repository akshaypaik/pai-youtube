import React, { useEffect } from 'react';
import './WatchPage.css';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../../utils/ReduxStore/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeSideBar());
    }, []);

    return (
        <div className='watch-container'>
            <iframe width="1200" height="600"
                src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage;