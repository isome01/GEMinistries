const PORT = 9910 || process.env.PORT

var express = require('express')
var events = require('./routes/Events/events')
var cors = require('cors')
var body_parser = require('body-parser')

var app = express()

app.use(cors())
app.use(body_parser.json())

events(app)

app.listen(PORT, ()=>{
  console.log('Express Backend listening on port', PORT)
})