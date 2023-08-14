const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(express.static('public'))

const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on("connection", socket => {
    console.log("Nueva conexión, ", socket.id);
    
    socket.on("loginForm", data => {
        // console.log('data', data);
    });

    socket.on("sendMessage", data => {
        console.log('Message: ', data);
        io.emit("showMessage", data);
    });

});

httpServer.listen(3000);