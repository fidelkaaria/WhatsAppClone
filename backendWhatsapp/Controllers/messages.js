
import Messages from "../models/messages.js";

 const postMessage = async(req, res) => {
     const dbMessage = req.body;

     const newMessage = await Messages.create(dbMessage, (err, data) => {
         
         if (err) {
              
             res.status(500).send(err)
         } else {
             
             res.status(201).json(data)
          }
         
     })


}
 const getMessage = async(req, res) => {
    
     const messagesFound = Messages.find((err, data) => {
      
         if (err) {
             
             res.status(500).send(err)
         } else {
             res.status(200).json(data)
             
             
         }
         
         
         
  })
}


export {postMessage,getMessage}