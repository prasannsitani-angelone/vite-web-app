// export const socketConnectionObject = new Worker(
//   new URL("./websocket.worker.js", import.meta.url)
// );

// export const handleStartConnection = function () {
//   socketConnectionObject.postMessage({
//     connectionType: "INIT_WEBSOCKET",
//   });
// };

// export const handleStopConnection = function () {
//   socketConnectionObject.postMessage({
//     connectionType: "CLOSE_CONNECTION",
//   });
// };

// export const handlePostMessage = function (payload) {
//   socketConnectionObject.postMessage({
//     connectionType: "SENT_EVENTS",
//     payload: JSON.parse(JSON.stringify(payload)),
//   });
// };

// export const subscribeTokens = (data) => {
//   socketConnectionObject.postMessage(data);
// };

// socketConnectionObject.onmessage = function (e) {
//   const data = e.data;
//   console.log({ data });
// };
