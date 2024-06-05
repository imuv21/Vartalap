import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <Fragment>
       <Helmet>
        <title>Vartalap</title>
      </Helmet>
      <div className='page flex center'>
          <p>Home</p> 
      </div>
    </Fragment>
  )
}

export default Home