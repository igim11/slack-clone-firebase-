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

function Sidebar() {
  // const [channels, setChannels] = useState([]);

  useEffect(() => {
    
  }, [])

  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <div className='sidebar_info'>
                <h2>Avion School</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Migi Castro
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
        <SidebarOption Icon={AddIcon} title='Add Channel' />
        <SidebarOption title='Batch 29' />
        {/* connect to DB and add all channels */}
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title='Direct Messages' />
        <SidebarOption Icon={AddIcon} title='New Message' />
        {/* connect to DB and add all DMs */}
    </div>
  )
}

export default Sidebar