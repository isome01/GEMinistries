const PORT = 9910 || process.env.PORT
const express = require('express')
const events = require('./routes/Events/events')
const cors = require('cors')
const body_parser = require('body-parser')

var app = express()

app.use(cors())
app.use(body_parser.json())

events(app)

app.listen(PORT, ()=>{
  console.log('Express Backend listening on port', PORT)
})
