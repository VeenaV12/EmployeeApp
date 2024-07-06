const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./DB/mongoDb')
const userRoute = require('./Routes/userRoute')
const adminRoute = require('./Routes/adminRoute')
const app = express()
app.use(cors())

app.use((req, res, next) => {
  req.setHeader('Access-Control-Allow-Origin', 'https://employee-app-client.vercel.app'); // Allow requests from your frontend origin
  req.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow common HTTP methods
  req.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');// Allow common headers
  req.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/user',userRoute)
app.use('/admin',adminRoute)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Employee app listening on port ${port}`)
})