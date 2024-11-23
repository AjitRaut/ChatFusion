const express = require("express");
const http = require("http");
const socketio = require('socket.io');
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const server = http.createServer(app)
const io = socketio(server)
 
connectDB();


PORT = 3000 || process.env.PORT;

server.listen(PORT , ()=>{
    console.log(`server runnning on ${PORT}`)
})