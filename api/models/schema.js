const mongoose = require('mongoose');

// simple schema, see mongodb schema docs
const Schema = new mongoose.Schema({
  dataName: {
    type: String,
    required: true,
  },
});
/* eslint-disable */
// the name of this export must line up with your collection
const test = module.exports = mongoose.model('test', Schema);
