const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Basic route to check server
app.get('/', (req, res) => {
    res.send('Subterfuge Game Server is running!');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const GameManager = require('./gameManager');
const gameManager = new GameManager();

io.on('connection', (socket) => {
    console.log('A new user connected');

    socket.on('new player', (playerName) => {
        const player = { id: socket.id, name: playerName };
        gameManager.addPlayer(player);
        socket.emit('team assigned', gameManager.getTeams());
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
