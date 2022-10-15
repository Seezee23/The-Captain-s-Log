require('dotenv').config()
// Require modules
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Logs = require('./models/logs')

// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})


/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */

app.use(methodOverride('_method'))

/* END Middleware */

// Mount Routes
/*Start Routes */


// INDEX --- READ --- GET
app.get('/logs', (req, res) => {
  Logs.find({}, (err, foundLogs) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('Index', {
        logs: foundLogs
      })
    }
  })
})

// NEW (Not applicable in an api)
app.get('/logs/new', (req, res) => {
  res.render('new')
})

// DELETE
app.delete('/logs/:id', (req, res) => {
  Logs.findByIdAndDelete(req.params.id, (err, deletedLogs) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/logs')
    }
  })
})

// UPDATE
app.put('/logs/:id', (req, res) => {
  req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
  Logs.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedLogs) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/logs/${updatedLogs._id}`)
    }
  })
})

// CREATE
app.post('/logs', (req, res) =>{
  req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
  Logs.create(req.body, (err, createdLogs) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/logs/${createdLogs._id}`)
      res.send('received')
    }
  })
})

// EDIT (not applicable in an api)
app.get('/logs/:id/edit', (req, res) => {
  Logs.findById(req.params.id, (err, foundLogs) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('logs/Edit', {
      logs: foundLogs
     })
    }
  })
 })

// SHOW ---- READ ---- GET
app.get('/logs/:id', (req, res) => {
 Logs.findById(req.params.id, (err, foundLogs) => {
   if(err){
    console.error(err)
    res.status(400).send(err)
   } else {
    res.render('logs/Show', {
      logs: foundLogs
    })
   }
 })
})



/* END ROUTES */


// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})