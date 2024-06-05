import React, { memo } from 'react';
import AvatarCard from './AvatarCard';
import {Link} from 'react-router-dom';

const ChatItem = ({ avatar = [], name, _id, groupChat = false, sameSender, isOnline, newMessageAlert, index = 0, handleDeleteChat }) => {


  return (
    <Link to={`/chat/${_id}`}   className={`chat-item ${sameSender ? 'new-message' : ''}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>

      <AvatarCard avatar={avatar} />

      <div className='flexcol start wh'>
        <p style={{ color: newMessageAlert ? 'var(--footer)' : 'black' }}>{name}</p>
        {newMessageAlert && (
          <p style={{ color: newMessageAlert ? 'var(--footer)' : 'black' }}>{newMessageAlert.count} New Messages</p>
        )}
      </div>

      <div className='flexcol center'>
        {isOnline && (
          <div className='online-dot'></div>
        )}
      </div>

    </Link>
  )
}

export default memo(ChatItem);