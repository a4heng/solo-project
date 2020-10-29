require('dotenv/config')
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  ,()=>{
  console.log("connected to db")
})