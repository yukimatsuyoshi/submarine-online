function createWebSocketServer(io, game) {

    const rootIo = io.of('/');
    rootIo.on('connection', (socket) => {
  
      const displayName = socket.handshake.query.displayName;
      const thumbUrl = socket.handshake.query.thumbUrl;

      console.log('WebSocket のコネクションがありました。');
      socket.emit('start data', {});
      // const startObj = game.newConnection(socket.id, displayName, thumbUrl);
      // socket.emit('start data', startObj);
  
      socket.on('disconnect', () => {
        // game.disconnect(socket.id);
      });
    });
  
    const socketTicker = setInterval(() => {
        // rootIo.volatile.emit('map data', game.getMapData); // 全員に送信
        rootIo.volatile.emit('map data', {}); // 全員に送信
    },66);
}
  
module.exports = {
    createWebSocketServer
};