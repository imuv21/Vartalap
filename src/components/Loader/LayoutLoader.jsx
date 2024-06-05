import React from 'react';
import { Skeleton } from '@mui/material';

const LayoutLoader = () => {
    return (
        <>
            <div className='componentForLayout flex center-space wh'>
                <Skeleton variant='rounded' height={'70px'} width={'100vw'} />
            </div>
            <div className="grid-container">
                <div className="grid-item one"><Skeleton variant='rounded' height={'100vh'} /></div>
                <div className="grid-item two">

                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />
                    <div style={{height: '20px'}}></div>
                    <Skeleton variant='rounded' height={'80px'} />

                </div>
                <div className="grid-item three"><Skeleton variant='rounded' height={'100vh'} /></div>
            </div>
            <div className='componentForLayout flex center wh'>
                <Skeleton variant='rounded' height={'70px'} width={'100vw'} />
            </div>
        </>
    )
}

export default LayoutLoader