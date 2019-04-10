const express = require('express');
const mongoose = require('mongoose');

const app = express(); 
mongoose.connect("mongodb+srv://oministack:oministack@cluster0-jtvab.mongodb.net/boxes?retryWrites=true",{
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.listen(3333);