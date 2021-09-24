const express = require('express') 
const cors = require('cors')
const mongoose  = require('mongoose')

require('dotenv').config(); 

const uri = process.env.DB_URL
mongoose.connect(uri, {useNewUrlParser:true})

const connection = mongoose.connection; 

const app = express(); 
const port = process.env.PORT || 5000; 

const exerciseRoute = require('./routes/exercises')
const userRoute = require('./routes/users');

//app.use(cors); 
app.use(express.json());

connection.once('open', ()=> {
    console.log('This is has thisdf')
})

app.use('/exercises', exerciseRoute)
app.use('/users', userRoute)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})