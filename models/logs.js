const mongoose = require('mongoose')

// Make A Schema
const capitals_logSchema = new mongoose.Schema({
    title: { title: String, required: true},
    entry: { entry: String, required: true},
    shipIsBroken: Boolean,
    { timestamps: true}
})


// Make A Model From The Schema

const Captains_log = mongoose.model('Captains_log', capitals_logSchema)

// Export The Model For Use  In The App

module.exports = Captains_log