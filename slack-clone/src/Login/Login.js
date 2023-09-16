import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(result => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
    .catch(error => {
        alert(error.message);
      })
  }

  return (
    <div className='login'>
        <div className='login_container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png' alt='logo'></img>
            <h1>Sign in to Slack Clone</h1>
            <p>slackclone.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>
  )
}

export default Login