import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(({ user }) => {
        dispatch(
            login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            })
        )
    })
    }
    
  return (
    <div className='login'>
      <div className='login__container'>
        <img src='https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/1/43/gmail_delete_emails_0.png?itok=2jPpzyj2' alt='' />

        <Button varint='contained' color='primary' onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

export default Login

