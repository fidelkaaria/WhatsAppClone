

import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import './App.css';
import react, { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './axios.js'

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
     
    axios.get('/').then((res) => {
      
      // console.log(res.data);
      setMessages(res.data)

    })
  // console.log(messages)

   },[])


  useEffect(() => {
    const pusher = new Pusher('0a9237a976966f19c731', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage)=> {
      // alert(JSON.stringify(newMessage));


      setMessages([...messages, newMessage])
      console.log(messages)

    });


    return () => {
     
      channel.unbind_all()
      channel.unsubscribe()
    }
    


 },[messages])

 

  return (
    <div className="app">
      <div className="app_body">
 
      <Sidebar />
        <Chat messages={messages } />

      </div>
  
    </div>
  );
}

export default App;
