const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io')
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET, POST'],
    },
});


io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join_room', (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    })

    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data);
        // console.log(data);
    })
    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id)
    })
});


server.listen(8000,() =>{
    console.log("WE'RE ON!!!")
});

// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// const app = express();
// const server = createServer(app);
// const io = new Server(server, {
//     connectionStateRecovery: {}
// });

// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, 'index.html'));
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//         });
// });


// server.listen(8000, () => {
//     console.log('server running at http://localhost:8000');
// });