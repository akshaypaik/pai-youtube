import React, { useRef, useState } from 'react';
import Button from './Button/Button';
import './ButtonList.css';

const ButtonList = () => {

    const buttonList = [
        "All",
        "Gaming",
        "Mortal Kombat Mobile",
        "Live",
        "JavaScript",
        "Data Structures",
        "Options strategies",
        "Stocks",
        "Shark Tank",
        "Podcasts",
        "Indian Premier League",
        "Music",
        "Ancient History",
        "Computers",
        "Recently uploaded",
        "Watched",
        "New to you",
        "Gadgets",
        "Lessons"
    ];
    const containerRef = useRef(null);
    const [selectedMenuButton, setSelectedMenuButton] = useState("All");

    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const onButtonMenuSelect = (selectedMenuButton) => {
        setSelectedMenuButton(selectedMenuButton);
    }

    return (
        <div className='btn-list-wrapper'>
            <button className='scroll-button left' onClick={() => scroll('left')}>{'<'}</button>
            <div className='btn-list-container' ref={containerRef}>
                {buttonList.map((item) =>
                    <Button key={item} buttonName={item}
                        onButtonMenuSelect={onButtonMenuSelect}
                        selectedMenuButton={selectedMenuButton} />)}
            </div>
            <button className='scroll-button right' onClick={() => scroll('right')}>{'>'}</button>
        </div>
    );
}

export default ButtonList