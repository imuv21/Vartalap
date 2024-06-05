import React from 'react';
import { Avatar, AvatarGroup, Box } from '@mui/material';

const AvatarCard = ({ avatar = [], max = 4 }) => {
    return (
        <div className='flex'>
            <AvatarGroup max={max}>
                <Box width={"5rem"} height={"3rem"} position={"relative"} >
                    {
                        avatar.map((i, index) => (
                            <Avatar key={index} src={i} alt={`Avatar ${index}`} sx={{ width: '3rem', height: '3rem', border: '2px solid white', position: 'absolute', left: {xs: `${0.5 + index}rem`}, sm: `${index}rem` }} />
                        ))
                    }
                </Box>
            </AvatarGroup>
        </div>
    )
}

export default AvatarCard