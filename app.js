const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Gyökér');
});

mongoose.connect('mongodb://testboy:rhino94@ds155396.mlab.com:55396/rest',
    { useNewUrlParser: true },
  () => console.log('Connected to DB!')
);

app.listen(3000);

