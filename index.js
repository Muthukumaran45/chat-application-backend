const express = require('express')
const cors = require('cors')
require('dotenv').config()

// files
const router = require('./routes/index')
const connectDB = require('./config/connectDB')


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())

const PORT = process.env.PORT || 8080

app.get("/", (req, res)=>{
    res.json({
        message : "server is running at "+PORT
    })
})


app.use('/api',router)


connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log("server running on =",PORT);
    })
})


