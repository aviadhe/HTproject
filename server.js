const express = require('express');
const app = express();
const servicesRouter = require('./routes/services');
const mongoose = require('mongoose');
require('dotenv').config();


const uri = "mongodb+srv://aviadhe:ht1234@homttown-cmnzr.mongodb.net/test";


mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use('/services', servicesRouter);

app.listen(3005, () => console.log('server started'));