const mongoose = require('mongoose');

// simple schema, see mongodb schema docs 
const Schema = new mongoose.Schema({
    dataName: {
        type: Number,
        required: true
    }
})

const bitofdata = module.exports =  mongoose.model('bitofdata', Schema)

