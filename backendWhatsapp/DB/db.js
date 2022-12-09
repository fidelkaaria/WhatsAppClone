
import mongoose from "mongoose"


const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

// module.exports = connectDB
export default  connectDB


