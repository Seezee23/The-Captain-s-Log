const mongoose = require('mongoose')

// Make A Schema
const capitals_logSchema = new mongoose.Schema({
    title: { title: String, required: true},
    entry: { entry: String, required: true},
    shipIsBroken: Boolean,
})


// Make A Model From The Schema

const log = mongoose.model('log', logSchema)

// Export The Model For Use  In The App

module.exports = log