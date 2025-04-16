const express = require("express");
const http = require("http");
const WebSocket = require('ws');
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const WSS=new WebSocket.Server({ server });

WSS.on('connection', (WS) => {
  console.log('New client connected');

  WS.on('message',(message) => {
  console.log(`Received message: ${message}`);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message.toString());
    }
    });
});

WS.on('close',() => {
  console.log('Client disconnected');
});

});

const PORT=5000;
server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
