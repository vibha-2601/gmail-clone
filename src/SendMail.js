import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';


const SendMail = () => {
  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <CloseIcon className='sendMail__close' />
        </div>

        <form>
            <input placeholder='To' type='text' />
            <input placeholder='Subject' type='text' />
            <input placeholder='Message...' type='text' className='sendMail__message' />
        </form>

        <div className='sendMail__options'>
            <Button className='sendMail__send'
            variant='container'
            color='primary'
            type='submit'
            >
            Send
            </Button>
        </div>
    </div>
  )
}

export default SendMail
