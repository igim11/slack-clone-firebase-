import React from 'react';
import './Chat.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <div className='chat_headerLeft'>
          <h4 className='chat_channelName'>
            <strong># Batch 29</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className='chat_headerRight'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className='chat_message'>
        <Message />
      </div>
      <ChatInput />
    </div>
  )
}

export default Chat