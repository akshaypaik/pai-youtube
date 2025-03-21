import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ authorName, authorMessage, authorImage }) => {
  return (
    <div className='chat-message-container'>
        <img alt="avatar" src={authorImage}></img>
        <div className='chat-msg-description'>
            <span className='chat-msg-author-name'>{authorName}</span>
            <span className='chat-msg-author-message'>{authorMessage}</span>
        </div>
    </div>
  )
}

export default ChatMessage