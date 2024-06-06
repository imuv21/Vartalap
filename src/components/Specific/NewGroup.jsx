import React, { useState } from 'react'
import { sampleUsers } from '../../constants/jsonData';
import UserItem from './UserItem';
import { Dialog, TextField } from '@mui/material';
import { useInputValidation } from '6pp';

const NewGroup = () => {

  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers(prev => [...prev, id]);
  }
  console.log(selectedMembers);

  const submitHandler = () => {
  }

  return (
    <Dialog open>
      <div className='flexcol center wh' style={{ padding: '10px', gap: '10px' }}>
        <div className='headingSmol'>New Group</div>
        <TextField label="Group Name" value={groupName.vlaue} onChange={groupName.changeHandler} />
        <div className='textBig'>Members</div>
        <div className='flexcol wh center' style={{ gap: '10px' }}>
          {
            members.map((i) => (
              <UserItem user={i} key={i._id} handler={selectMemberHandler} />
            ))
          }
        </div>
        <div className="flex center-space wh" >
          <button style={{width: '50px', padding: '5px'}}>Cancel</button>
          <button style={{width: '50px', padding: '5px'}} onClick={submitHandler}>Create</button>
        </div>
      </div>
    </Dialog>
  )
}

export default NewGroup