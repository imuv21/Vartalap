import { Avatar, Dialog, Typography } from '@mui/material'
import React, { memo } from 'react'
import { sampleNotifications } from '../../constants/jsonData'


const Notifications = () => {

  const friendRequestHandler = ({_id, accept}) => {

  }

  return (
    <Dialog open>
      <div className='flexcol center wh' style={{padding: '10px', gap: '10px'}}>
        <div className='headingSmol'>Notifications</div>
        { 
          sampleNotifications.length > 0 ? (
            sampleNotifications.map(({sender, _id}) => (
              <NotificationItem sender={sender} _id={_id} handler={friendRequestHandler} key={_id}>{_id}</NotificationItem>
            ))
          ) : 
          (<Typography textAlign={"center"}>No notifications</Typography>)
        }
      </div>
    </Dialog>
  )
}

const NotificationItem = memo(({sender, _id, handler}) => {
  const {name, avatar} = sender
  return (
    <div className='flex center-space wh' style={{border: '1px solid gray', borderRadius: '5px', padding: '2px 10px', gap: '20px'}}>
      <div className="flex center wh" style={{ gap: '10px'}}>
        <Avatar src={avatar} />
        <div className='flex center wh'>{`${name} sent you a friend request.`}</div>
      </div>
      <div className='flex center' style={{ gap: '10px'}}>
        <button style={{width: '50px', padding: '5px'}} onClick={() => handler({_id, accept: true})}>Accept</button>
        <button style={{width: '50px', padding: '5px'}} onClick={() => handler({_id, accept: false})}>Reject</button>
      </div>
    </div>
  )
});

export default Notifications