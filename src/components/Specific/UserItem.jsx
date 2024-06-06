import { Avatar } from '@mui/material'
import React, { memo } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const UserItem = ({ user, handler, handlerIsLoading }) => {

  const { name, id, avatar } = user

  return (
    <div className='flex center-space wh' style={{border: '1px solid gray', borderRadius: '5px', padding: '2px 10px', gap: '20px'}}>
      <div className="flex center" style={{ gap: '10px'}}>
        <Avatar />
        <div>{name}</div>
      </div>
      <AddCircleIcon onClick={() => handler(_id)} disabled={handlerIsLoading} style={{ width: '30px', height: '30px', color: 'skyblue' }} />
    </div>
  )
}

export default memo(UserItem)