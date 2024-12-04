const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const autRoute = require("./routes/authRoute")

const app = express();
app.use(cors());
app.use(express.json())

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

connectDB();

app.use("/user" ,autRoute)

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("send-message", (data) => {
    io.to(data.room).emit("receive-message", data.message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

PORT = 5000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`server runnning on ${PORT}`);
});
