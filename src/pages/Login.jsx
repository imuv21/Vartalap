import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useInputValidation, useStrongPassword } from '6pp';
import { emailValidator } from '../utils/validators';

const Login = () => {
  
  //validation
  const email = useInputValidation("", emailValidator);
  const password = useStrongPassword();

  //handlers
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='page flex center'>
        <form className="box flexcol center" onSubmit={handleLogin}>
          <input type="email" name='email' value={email.value} onChange={email.changeHandler} autoComplete='email' placeholder='Enter your email...' />
          {email.error && (
            <div className='error'>{email.error}</div>
          )}
          <input type="password" name='password' value={password.value} onChange={password.changeHandler} autoComplete="username" placeholder='Enter your password...' />
          {password.error && (
            <div className='error'>{password.error}</div>
          )}
          <button type='submit'>Login</button>
          <div className="text">Don't have an account? <Link className='text hover' to='/signup'>Click here</Link></div>
        </form>
      </div>
    </Fragment>
  )
}

export default Login