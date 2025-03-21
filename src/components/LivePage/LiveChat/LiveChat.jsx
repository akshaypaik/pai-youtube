import React, { useEffect, useRef, useState } from 'react';
import './LiveChat.css';
import ChatMessage from '../ChatMessage/ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage } from '../../../utils/ReduxStore/chatSlice';
import { generateRandomMessagesForLiveChat, generateRandomNamesForLiveChat } from '../../../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [userMessage, setUserMessage] = useState("");
    const darkMode = useSelector((store) => store.app.darkMode);
    // const chatContainerRef = useRef(null);

    useEffect(() => {
        //API Polling
        const interval = setInterval(() => {
            console.log("API polling");
            dispatch(addChatMessage({ authorName: generateRandomNamesForLiveChat(), authorMessage: generateRandomMessagesForLiveChat() }));
        }, 1500);

        return () => {
            clearInterval(interval);
        }
    }, []);

    // useEffect(() => {
    //     // Scroll to bottom whenever chatMessages changes
    //     if (chatContainerRef.current) {
    //         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    //     }
    // }, [chatMessages]);

    const handleUserMessagePublish = () => {
        dispatch(addChatMessage({ authorName: "Akshay Pai", authorMessage: userMessage }));
        setUserMessage("");
    }

    return (
        <div className='live-chat'>
            <div className='live-chat-wrapper'>
                <div className='live-chat-heading'>
                    <span>Top Chat</span>
                </div>
                <hr />
                <div className='live-chat-container'>
                    {/* <ChatMessage authorName="Akshay Pai" authorMessage="This is Pai YouTube! ▶️" /> */}
                    {chatMessages.map((chatMessage, index) =>
                        <ChatMessage key={index} authorName={chatMessage.authorName}
                            authorMessage={chatMessage.authorMessage} />)}
                </div>

            </div>
            <form className='live-chat-input-container' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Chat...' value={userMessage}  onChange={(e) => setUserMessage(e.target.value)} />
                <button onClick={handleUserMessagePublish}>
                    <svg fill={darkMode ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}><path d="M5 12 3 3l19 9-19 9 2-9zm.82.93-1.4 6.29L19.66 12 4.42 4.78l1.4 6.29L17 12l-11.18.93z" fillRule="evenodd"></path></svg>
                </button>
            </form>
        </div>
    )
}

export default LiveChat