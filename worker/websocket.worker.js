let wsUrl = "ws://localhost:8080";
let socket = null;

// self.initWebsocket = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       socket = new WebSocket(wsUrl);
//       socket.onopen = self.socketOnOpen;
//       socket.onmessage = self.socketOnMessage;
//       socket.onerror = self.socketOnError;
//       socket.onclose = self.socketOnClose;

//       console.log("[SOCKET] : connection established");
//       resolve(socket);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// self.socketOnOpen = function () {};

// self.socketOnMessage = function (message) {
//   console.log("socketOnMessage : ", message);
// };

// self.onmessage = function (e) {
//   const data = e.data;
//   const { connectionType } = data;
//   console.log({ data });
//   switch (connectionType) {
//     case "INIT_WEBSOCKET":
//       console.log({ socket });
//       if (!socket || socket.readyState != 1) {
//         socket = self.initWebsocket();
//       }
//       break;
//     case "SENT_EVENTS":
//       console.log({ socket });
//   }
// };
