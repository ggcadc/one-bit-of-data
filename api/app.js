const express = require('express')();
const app = express;
const mongoose = require('mongoose');

//URI is available in atlas
const uri = 'YOUR_MONGODB_URI'

//edit the schema to access the bit you need
const bitofdata = require('./models/bitofdata')

//cors resolves conflics with cross origin requests
const cors = require('cors')

//connect to mongodb
mongoose.connect(uri, { useMongoClient: true });

app.use(cors());

app.get('/', function(req, res){
    res.send('please use /api/data')
})

app.get('/api/data', function(req, res){
    bitofdata.find(function(err, data){
        if(err){
            console.error(err)
        }
        res.json(data)
    })
})

// runs on port 3k or the process env port which allows this to work on heroku
app.listen(process.env.PORT || 3000)
console.log('running on port process or 3000')