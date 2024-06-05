import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useInputValidation } from '6pp';
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from './UserItem';
import { sampleUsers } from '../../constants/jsonData';

const Search = () => {

  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;
  const [users, setUsers] = useState(sampleUsers);
  const addFriendHandler = (id) => {
    console.log(id);
  };
  

  return (
    <Dialog open>
      <Stack p={"2rem"} spacing={"20px"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField label="Search here..." value={search.value} onChange={search.onChange}
          size='small' variant='outlined' inputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <div className='flexcol wh center' style={{gap: '10px'}}>
          {
            users.map((i) => (
              <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}   />
            ))
          }
        </div>

      </Stack>
    </Dialog>
  )
}

export default Search