import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';

let io: Server | null = null;

/** Initialize Socket.IO with the given HTTP server and return the io instance. */
export function initSocket(server: HttpServer) {
  io = new Server(server, {
    cors: {
      origin: '*', 
    }
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    
  });

  return io;
}

/** Retrieve the Socket.IO instance. */
export function getIo() {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
}
