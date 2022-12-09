
import mongoose from "mongoose";


const whatsappSchema = new mongoose.Schema({

    message: String,
    name: String,
    timestamp: String,
    received : String
    





})


export default mongoose.model('messageContent',whatsappSchema)