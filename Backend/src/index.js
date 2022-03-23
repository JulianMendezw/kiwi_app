const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparse = require('body-parser')
const path = require('path')
require('./firebasedb')

// Local port for dev
app.set('Port', 4000)

// Start server
app.listen(app.get('Port'), () => { console.log("✅ Listenig on port ", app.get('Port')) })

// Extra information for every requets
app.use(morgan('dev'))

// To receive json data from body request
app.use(express.json())

// Routes
app.use('/api/', require('./routes/kiwi.routes'))

