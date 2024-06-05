import { Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import { sampleNotifications } from '../../constants/jsonData'

const Notifications = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem'}} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        { 
          sampleNotifications.length > 0 ? (<></>) : 
          (<Typography textAlign={"center"}>No notifications</Typography>)
        }
      </Stack>
    </Dialog>
  )
}

export default Notifications