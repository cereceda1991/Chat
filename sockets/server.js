const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv"); 

dotenv.config(); 

const app = express();

app.use(express.static('public'))

const httpServer = createServer(app);
const io = new Server(httpServer, {});

const PORT = process.env.PORT || 3000; 

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

httpServer.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
