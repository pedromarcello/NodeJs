const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
app.use(cors());

const server = require('http').server(app)
const io = require('socket.io')(server)
const cor = require('cors')
io.on('connection',socket =>{
    socket.on('connectRoom',box=>{
        socket.join(box);
    })
})
mongoose.connect("mongodb+srv://oministack:oministack@cluster0-jtvab.mongodb.net/boxes?retryWrites=true",{
    useNewUrlParser: true
});

app.use((req,res,next)=>{
    req.io=io;
    return next()
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.use('/files',express.static(path.resolve(__dirname,  '..', 'tmp')));
server.listen(process.env.PORT ||3333);