import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatlist from './Specific/Chatlist';
import { sampleChats } from '../constants/jsonData';
import { useParams } from 'react-router-dom';
import Profile from './Specific/Profile';

const Layout = ({ children }) => {

    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
        e.preventDefault();
        console.log("Delete Chat", _id, groupChat);
    }

    return (
        <Fragment>
            <Header />
            <div className="grid-container">
                <div className="grid-item one"><Chatlist chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat} /></div>
                <div className="grid-item two">{children}</div>
                <div className="grid-item three"><Profile /></div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Layout;