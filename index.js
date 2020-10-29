require('dotenv/config')
const db = require('./data/database');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//Routers
const messageRoutes = require('./controllers/messageController')

const app = express();

app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:8080'}))

app.listen(process.env.PORT, ()=>{
    console.log(`Server is started at port ${process.env.PORT}`);
})
app.use('/messages', messageRoutes);