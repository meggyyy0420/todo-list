const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const Todo = require('./models/todo')

const app = express()

mongoose.connect('mongodb://localhost/todo_list_express')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const port = 3000

app.get('/', (req, res) => {
  Todo.find()
    .lean()
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log(`APP is running on http:localhost:${port}`)
})