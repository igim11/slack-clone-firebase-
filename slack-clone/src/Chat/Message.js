import React from 'react';
import './Message.css';

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className='message'>
        <div className='message_info'>
            <h4>user <span className='message_timestamp'>timestamp...</span></h4>
            <p>message</p>
        </div>
    </div>
  )
}

export default Message