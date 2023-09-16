import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
        )
    ))
  }, [])

  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <div className='sidebar_info'>
                <h2>Avion School</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </div>
            <CreateIcon />
        </div>
        <SidebarOption Icon={InsertCommentIcon} title='Threads' />
        <SidebarOption Icon={AlternateEmailIcon} title='Mentions & reactions' />
        <SidebarOption Icon={DraftsIcon} title='Saved items' />
        <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
        <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
        <SidebarOption Icon={AppsIcon} title='Apps' />
        <SidebarOption Icon={FileCopyIcon} title='File browser' />
        <SidebarOption Icon={ExpandLessIcon} title='Show less' />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
        <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
        {channels.map(channel => (
          <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
        ))}
        {/* connect to DB and add all channels */}
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title='Direct Messages' />
        <SidebarOption Icon={AddIcon} title='New Message' />
        {/* connect to DB and add all DMs */}
    </div>
  )
}

export default Sidebar