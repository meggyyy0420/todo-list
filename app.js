const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/todo_list_express')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

const port = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`APP is running on http:localhost:${port}`)
})