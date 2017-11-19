const express = require('express')();
const mongoose = require('mongoose');

const app = express;

// URI is available in atlas for youre mongoDB
const uri = require('./.env.local.js');

// edit the schema to access the document you are looking for
const test = require('./models/schema');

// cors resolves conflics with cross origin requests
const cors = require('cors');

mongoose.connect(uri, { useMongoClient: true });

app.use(cors());

app.get('/', (req, res) => {
  res.send('please use /api/data');
});

// this is your endpoint, treat it with kindness
app.get('/api/data', (req, res) => {
  // mongoose runs the find command using the schema we have defined and imported
  test.find((err, data) => {
    if (err) {
      console.error(err);
    }
    return res.json(data);
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`running on ${port}`);
});
