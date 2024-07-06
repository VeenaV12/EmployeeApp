const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./DB/mongoDb')
const userRoute = require('./Routes/userRoute')
const adminRoute = require('./Routes/adminRoute')
const app = express()
app.use(cors())

app.use(cors({
  origin:['https://employee-app-client.vercel.app'],
  credentials:true,
  methods:['GET','POST','PUT','DELETE']
}))

app.use('/user',userRoute)
app.use('/admin',adminRoute)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Employee app listening on port ${port}`)
})