
//importing

import express from 'express'
import mongoose from 'mongoose'
import connectDB from './DB/db.js'
import dotenv from "dotenv"
import router from './Routes/route.js'
import Pusher from 'pusher'
import cors from 'cors'

dotenv.config()


//app config

const app = express()
const port = process.env.PORT || 9000

 const pusher = new Pusher({
  appId: "1501737",
  key: "0a9237a976966f19c731",
  secret: "455ac520e48512d50219",
  cluster: "ap2",
  useTLS: true
});

//Middlewares
app.use(cors())
app.use(express.json())


//Db config


//???

//api routes

app.use('/', router)

app.get('/',(req, res)=> {
     
  res.status(200).send("This route is active")

 })


 

// //listen
const start = async () => {
  try {

    await connectDB(process.env.Mongo_url)


    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

 const db =   mongoose.connection;
db.once("open", () => {
       
  console.log("Db connected")


       const msgCollection = db.collection('messagecontents');

      const changeStream = msgCollection.watch()

       changeStream.on('change', (change) => {
         
         console.log(change);
      
  
       if (change.operationType === 'insert') {
         
         const messageDetails = change.fullDocument;
         pusher.trigger('messages', 'inserted', {
           
           
          
           message: messageDetails.message,
           name: messageDetails.name,
           timestamp: messageDetails.timestamp,
          received : messageDetails.received
           
           
           
         })
         
       } else {
         
         console.log('Error triggering pusher');
         
         }
          })


     })









// app.listen(port, () => {
    
//     console.log(`Server is listening on port ${port}`);
// })



