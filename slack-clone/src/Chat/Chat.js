import React, { useEffect, useState } from 'react';
import './Chat.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    console.log('roomId:', roomId);
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          const data = snapshot.data();
          console.log('roomDetails:', data);
          setRoomDetails(data);
        })
    }

    db.collection('rooms').doc(roomId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) =>
      setRoomMessages(
        snapshot.docs.map(doc => doc.data())
      )
    )
  }, [roomId]);

  console.log('Current Room ID:', roomId);
  console.log(roomDetails);



  return (
    <>
    <div className='chat'>
      <div className='chat_header'>
        <div className='chat_headerLeft'>
          <h4 className='chat_channelName'>
            <strong>#{roomDetails?.name}</strong>
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
        {roomMessages.map(({ message, timestamp, user, userImage }, index) => (
          <Message
          key={index}
          message={message}
          timestamp={timestamp}
          user={user}
          userImage={userImage} />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
    </>
  )
}

export default Chat