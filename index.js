const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()
const FoodMenuRoutes = require("./src/routes/foodMenuRoutes")

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello flavor fusion!')
})

// routes folder

app.use('/api/Foods', FoodMenuRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 

async function main() {

  await mongoose.connect(process.env.MDB_URI)
}
main()
  .then(() => console.log('successfully connected to the Mongodb'))
  .catch((err) => console.log(err))
