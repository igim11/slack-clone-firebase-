import React, { useState } from 'react';
import './ChatInput.css';
import { Button } from '@mui/material';

function ChatInput() {
    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault();
        setInput('');
    };

  return (
    <div className='chatInput'>
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder='Send Message'></input>
            <button type='submit' onClick={sendMessage}>SEND</button>
        </form>
    </div>
  )
}

export default ChatInput