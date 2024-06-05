import React from 'react'
import { Avatar } from '@mui/material';
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth } from '@mui/icons-material';
import moment from 'moment';
 
const Profile = () => {
    return (
        <div className='flexcol center centertext twenty'>
            <Avatar sx={{ width: 150, height: 150, objectFit: 'contain', border: '5px solid white' }} />
            <ProfileCard heading={"Bio"} text={"The Pawn That Was Promoted"} />
            <ProfileCard heading={"Username"} text={"imuv21"} Icon={<UserNameIcon />} />
            <ProfileCard heading={"Name"} text={"Uttam Verma"} Icon={<FaceIcon />} />
            <ProfileCard heading={"Joined"} text={moment('2023-11-02T18:25:43.511Z').fromNow()} Icon={<CalendarMonth />} />
        </div>
    )
};

const ProfileCard = ({ text, Icon, heading }) => (
    <div className='flex center ten'>
        {Icon && Icon}
        <div className='flexcol center'>
            <div className='textBig'>{text}</div>
            <div className="text" style={{color: 'rgb(178, 178, 178)'}}>{heading}</div>
        </div>
    </div>
);


export default Profile