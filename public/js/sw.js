// // Register event listener for the 'push' event.
// self.addEventListener('push', function (event) {
//     // Retrieve the textual payload from event.data (a PushMessageData object).
//     // Other formats are supported (ArrayBuffer, Blob, JSON), check out the documentation
//     // on https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData.
//     const payload = event.data ? event.data.text() : 'no payload';

//     // Keep the service worker alive until the notification is created.
//     event.waitUntil(
//         // Show a notification with title 'ServiceWorker Cookbook' and use the payload
//         // as the body.
//         self.registration.showNotification('ServiceWorker Cookbook', {
//             body: payload,
//         })
//     );
// });
console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Traversy Media!",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  });
});