import React, { useEffect } from 'react';
import './LiveChat.css';
import ChatMessage from '../ChatMessage/ChatMessage';

const LiveChat = () => {

    useEffect(() => {
        //API Polling
        const interval = setInterval(() => {
            console.log("API polling");
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className='live-chat-container'>
            <div className='live-chat-heading'>
                <span>Top Chat</span>
            </div>
            <hr />
            <ChatMessage authorName="Akshay Pai" authorMessage="This is Pai YouTube! ▶️" />
        </div>
    )
}

export default LiveChat