import io from 'socket.io-client';

class ChatController {
  constructor($scope) {
    'ngInject';

    this.scope = $scope;
    this.socket = io('http://localhost:9822');
    this.messages = [];
  }

  startServerConnection() {
    this.socket.on('chatMessage', (msg) => {
      this.messages.push(msg);
      this.scope.$apply();
    });
  }
}


export default ChatController;
