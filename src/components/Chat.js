

import { AttachFile, InsertEmoticon,MoreVert, SearchOutlined} from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import "./Chat.css"
import { Mic } from '@mui/icons-material'
import axios from '../axios.js'

const Chat = ({ messages }) => {
  
  const [input, setInput] = useState('')

  const sendMessage = async(e) => {
    
    e.preventDefault()
   await axios.post('/', {
      message: input,
      name: "fidel",
      timestamp: "awesome time here",
      received: true

    })
    
    setInput('')

  }







  return (

      <div className='chat'>
      <div className="chat-header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ----</p>
        </div>

        <div className="chat_headerRight">
       <IconButton>
        <SearchOutlined />
          </IconButton>
          <IconButton>
        <AttachFile/>
          </IconButton>
          <IconButton>
        <MoreVert/>
        </IconButton>


        </div>
      </div>
      <div className="chat-body">

        {messages.map((message) => {
         
          return <>
          
          
            <p className={`chat_message ${ message.received ? 'chat_receiver' : 'chat_message'} `}>
          
          <span className="chat-name">
            {message.name}
       </span>
      
          {message.message}
          <span className="chat_timestamp">
           {message.timestamp}
         </span>
          


        </p>
          
          </>
          
       })}

      </div>

      <div className="chat_footer">
        
        <InsertEmoticon />
        <form >
        <input value={input}  onChange={(e)=>setInput(e.target.value)}   type="text" placeholder='Type a Message' />
          <button onClick={sendMessage} type='submit' >Send a Message</button>
        </form>
        <Mic/>

   </div>


    </div>
  )
}

export default Chat