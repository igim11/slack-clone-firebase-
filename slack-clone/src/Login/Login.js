import React from 'react';
import './Login.css';
import { Button } from '@mui/material';

function Login() {
  return (
    <div className='login'>
        <div className='login_container'>
            <img src='' alt='logo'></img>
            <h1>Sign in to Slack Clone</h1>
            <p>slackclone.com</p>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Login