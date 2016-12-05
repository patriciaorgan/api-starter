require('dotenv').config()
const app = require('express')(),
      mongoose = require('mongoose'),
      {connection, Schema} = mongoose,
      {urlencoded,json} = require('body-parser'),
      services = require('./services'),
      passport = require('passport'),
      session = require('express-session'),
      {mongoURI, port} = require('./config')

//db config
mongoose.Promise=global.Promise
mongoose.connect(mongoURI)
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', ()=> console.log(`connected to ${mongoURI}!`))



//mids

app.use(urlencoded({extended: true}))
app.use(json())
app.use(session({secret:'secret',resave: true,saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/api', services)

app.listen(port, console.log(`on ${port}`))
