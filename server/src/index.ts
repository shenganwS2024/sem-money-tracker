import http from 'http';
import app from './app';  // Express app
import { initSocket } from './socket';
import { PORT } from './config'; // optional

const server = http.createServer(app);
const io = initSocket(server);

app.set('io', io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
