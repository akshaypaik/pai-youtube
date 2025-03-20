import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ authorName, authorMessage }) => {
  return (
    <div className='chat-message-container'>
        <img alt="avatar" src="https://yt3.ggpht.com/yti/ANjgQV-zFt1B7XeQ598f8NF8stTz2kpJxymy-MZrvbuK56PTAr9K=s88-c-k-c0x00ffffff-no-rj"></img>
        <div className='chat-msg-description'>
            <span className='chat-msg-author-name'>{authorName}</span>
            <span className='chat-msg-author-message'>{authorMessage}</span>
        </div>
    </div>
  )
}

export default ChatMessage