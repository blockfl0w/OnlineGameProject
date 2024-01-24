import { Server } from 'socket.io'


const io = new Server(server.httpServer)

io.on('connection', (socket) => {
	socket.emit('eventFromServer', 'Hello, World 👋')
})