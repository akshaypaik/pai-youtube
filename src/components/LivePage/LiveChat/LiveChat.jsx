import React, { useEffect, useRef, useState } from 'react';
import './LiveChat.css';
import ChatMessage from '../ChatMessage/ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage } from '../../../utils/ReduxStore/chatSlice';
import { generateRandomMessagesForLiveChat, generateRandomNamesForLiveChat, generateRandomUserImagesForLiveChat } from '../../../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [userMessage, setUserMessage] = useState("");
    const darkMode = useSelector((store) => store.app.darkMode);
    const chatContainerRef = useRef(null);
    const myImage = "https://yt3.ggpht.com/yti/ANjgQV-zFt1B7XeQ598f8NF8stTz2kpJxymy-MZrvbuK56PTAr9K=s88-c-k-c0x00ffffff-no-rj";
    const firstScrollDone = useRef(false);
    
    useEffect(() => {
        //API Polling
        const interval = setInterval(() => {
            console.log("API polling");
            dispatch(addChatMessage({ authorName: generateRandomNamesForLiveChat(), authorMessage: generateRandomMessagesForLiveChat(), authorImage: generateRandomUserImagesForLiveChat() }));
        }, 1500);
        scrollToBottomOfLiveChat();

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if(chatMessages.length > 12 && !firstScrollDone.current){
            scrollToBottomOfLiveChat();
            firstScrollDone.current = true;
        }
    }, [chatMessages]);

    const scrollToBottomOfLiveChat = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }

    const handleUserMessagePublish = () => {
        dispatch(addChatMessage({ authorName: "Akshay Pai", authorMessage: userMessage, authorImage: myImage  }));
        setUserMessage("");
        scrollToBottomOfLiveChat();
    }

    return (
        <div className='live-chat'>
            <div className='live-chat-wrapper' ref={chatContainerRef}>
                <div className='live-chat-heading'>
                    <span>Top Chat</span>
                </div>
                <hr />
                <div className='live-chat-container'>
                    {/* <ChatMessage authorName="Akshay Pai" authorMessage="This is Pai YouTube! ▶️" /> */}
                    {chatMessages.map((chatMessage, index) =>
                        <ChatMessage key={index} authorName={chatMessage.authorName}
                            authorMessage={chatMessage.authorMessage} authorImage={chatMessage.authorImage} />)}
                </div>

            </div>
            <form className='live-chat-input-container' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Chat...' value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
                <button onClick={handleUserMessagePublish}>
                    <svg fill={darkMode ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}><path d="M5 12 3 3l19 9-19 9 2-9zm.82.93-1.4 6.29L19.66 12 4.42 4.78l1.4 6.29L17 12l-11.18.93z" fillRule="evenodd"></path></svg>
                </button>
            </form>
        </div>
    )
}

export default LiveChat