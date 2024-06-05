import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

const Chat = () => {
  return (
    <Fragment>
       <Helmet>
        <title>Chat</title>
      </Helmet>
      <div className='page flex center'>
           Chat
      </div>
    </Fragment>
  )
}

export default Chat