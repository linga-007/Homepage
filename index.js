const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/users',userRoutes)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})

dotenv.config('./env')

try{
    const connect = async()=>{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected')
    }
    connect();
}catch(err){
    console.log(err.message)
}