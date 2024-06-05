import { CameraAlt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { emailValidator, usernameValidator } from '../utils/validators';

const Signup = () => {

  //validation
  const avatar = useFileHandler("single");
  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const email = useInputValidation("", emailValidator);
  const bio = useInputValidation("");
  const password = useStrongPassword();

  //handlers
  const handleSignup = (e) => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <div className='page flex center'>
        <form className="box flexcol center" onSubmit={handleSignup}>

          <div className='flexcol center relative'>
            <Avatar src={avatar.preview} sx={{ width: '9rem', height: '9rem', objectFit: 'contain', bgcolor: 'var(--top)' }} />
            <input type="file" name='avatar' onChange={avatar.changeHandler} id="file-input" hidden />
            <label htmlFor="file-input" className="custom-file-label">
              <CameraAlt />
            </label>
          </div>
          {avatar.error && (
            <div className='error centertext'>{avatar.error}</div>
          )}

          <input type="text" name='name' value={name.value} onChange={name.changeHandler} autoComplete='name' placeholder='Enter your name...' />
          <input type="text" name='username' value={username.value} onChange={username.changeHandler} autoComplete='name' placeholder='Enter your username...' />
          {username.error && (
            <div className='error'>{username.error}</div>
          )}
          <input type="email" name='email' value={email.value} onChange={email.changeHandler} autoComplete='email' placeholder='Enter your email...' />
          {email.error && (
            <div className='error'>{email.error}</div>
          )}
          <input type="text" name='bio' value={bio.value} onChange={bio.changeHandler} autoComplete='off' placeholder='Enter your bio...' />
          <input type="password" name='password' value={password.value} onChange={password.changeHandler} autoComplete="new-password" placeholder='Enter your password...' />
          {password.error && (
            <div className='error'>{password.error}</div>
          )}

          <button type='submit'>Signup</button>
          <div className="text">Already have an account? <Link className='text hover' to='/login'>Click here</Link></div>
        </form>
      </div>
    </Fragment>
  )
}

export default Signup