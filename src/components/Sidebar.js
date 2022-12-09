

import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLarge from '@mui/icons-material/DonutLarge';
import MorevertIcon from '@mui/icons-material/MoreVert'
import { Input, SearchOutlined } from '@mui/icons-material'
import SidebarChat from './SidebarChat';

//import IconButton from '@mui/material/IconButton';
// or
import { IconButton,Avatar } from '@mui/material';

const Sidebar = () => {
  return (<>
    <div className='sidebar'>
      <div className="sidebar_header">
        <Avatar src='https://media.istockphoto.com/photos/happy-business-woman-using-digital-tablet-at-home-picture-id1350926687?b=1&k=20&m=1350926687&s=170667a&w=0&h=aUIKNTpR30n_u1936cKGoGvs2C6cJZNC6XcpWACG5EE='/>

      <div className="sidebar_headerRight">
        <IconButton>
          <DonutLarge />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
         <IconButton>
          <MorevertIcon />
        </IconButton>
        
        
       
  </div>


      </div>


      <div className="sidebar-search">
        
        <div className="sidebar-searchContainer">
          
          <SearchOutlined />
          <input type="text" placeholder='Search or start new Chat' />

  </div>
 


  </div>

   <div className="sidebar__chat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat/>


</div>

      </div>
</>
  )
}

export default Sidebar