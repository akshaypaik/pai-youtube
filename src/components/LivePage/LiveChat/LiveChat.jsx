import React, { useEffect, useRef } from 'react';
import './LiveChat.css';
import ChatMessage from '../ChatMessage/ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage } from '../../../utils/ReduxStore/chatSlice';
import { generateRandomMessagesForLiveChat, generateRandomNamesForLiveChat } from '../../../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        //API Polling
        const interval = setInterval(() => {
            console.log("API polling");
            dispatch(addChatMessage({ authorName: generateRandomNamesForLiveChat(), authorMessage: generateRandomMessagesForLiveChat() }));
        }, 600);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        // Scroll to bottom whenever chatMessages changes
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <div className='live-chat-container' ref={chatContainerRef}>
            <div className='live-chat-heading'>
                <span>Top Chat</span>
            </div>
            <hr />
            {/* <ChatMessage authorName="Akshay Pai" authorMessage="This is Pai YouTube! ▶️" /> */}
            {chatMessages.map((chatMessage, index) =>
                <ChatMessage key={index} authorName={chatMessage.authorName}
                    authorMessage={chatMessage.authorMessage} />)}
        </div>
    )
}

export default LiveChat