import React from 'react'
import './TopBar.css'

import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopBar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <img className='topbarAdminImg' src="adminImages/admin.png" alt="eliot" />
        <div className='topbarIcon'>
          <SettingsIcon className='' />
        </div>
        <div className='topbarIcon'>
          <NotificationsIcon className='' />
        </div>
        <img src="flags/circle.png" className='topbarIcon' alt="" />
      </div>
      <div className="topbarRight">
        <div className="topbarIcon">
          <SearchIcon className='' />
        </div>
        <div className="topbarIcon">
          <MenuIcon className='' />
        </div>
      </div>
    </div>
  )
}
