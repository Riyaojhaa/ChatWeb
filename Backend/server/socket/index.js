import { Server } from 'socket.io';

export default function initializeSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('✅ New client connected:', socket.id);
        
        socket.on('chatMessage', (msg) => {
            console.log('📩 Message sended:', msg);
            io.emit('chatMessage', msg); //send the message to everyone
        });

        socket.on('disconnect', () => {
            console.log('❌ Client disconnected:', socket.id);
        });
    });
}

