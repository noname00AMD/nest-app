
console.log("js loaded");

// window.onload = () => {

//     ClassicEditor
//         .create(document.querySelector('#editor'))
//         .catch(error => {
//             console.error(error);
//         });

// }
window.onload = async () => {
    const el = document.querySelector(".top_bar")
    var home = document.querySelectorAll(".header")[0]
    const observer = new IntersectionObserver(
        ([e]) => {
            if (e.isIntersecting) {
                home.classList.remove("pin")
            } else {
                home.classList.add("pin")
            }
        },
        { threshold: [0] }
    );
    observer.observe(el)
    var show_all_btn = document.querySelectorAll(".show_all_btn")[0]
    var hide_all_btn = document.querySelectorAll(".hide_all_btn")[0]
    var submenu = document.querySelectorAll(".submenu")[0]
    show_all_btn.addEventListener("click", function (event) {
        if (getComputedStyle(submenu).display === "none") {
            submenu.style.display = "block"
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = function () { window.scrollTo(x, y); };
            home.classList.add("show")

        } else {
            home.classList.remove("show")
            submenu.style.display = "none"
            window.onscroll = false
        }
    })
    hide_all_btn.addEventListener("click", function (event) {
        submenu.style.display = "none"
        window.onscroll = false
        home.classList.remove("show")
    })


    home.addEventListener("click", (e) => {
        e.preventDefault()
    })
    // submenu.addEventListener("scroll", (e) => {
    //     console.log("here");
    //     e.preventDefault()
    // })



}

// if ("serviceWorker" in navigator) {
//     const handleServiceWorker = async () => {
//         const register = await navigator.serviceWorker.register("/sw.js");
  
//         const subscription = await register.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: publicVapidKey,
//         });
  
//         const res = await fetch("http://localhost:4000/subscribe", {
//           method: "POST",
//           body: JSON.stringify(subscription),
//           headers: {
//             "content-type": "application/json",
//           },
//         });
  
//         const data = await data.json();
//         console.log(data);
//       };
//       handleServiceWorker();
//   }









const publicVapidKey =
  "BNg1VseiEwrH-vcy5QH20HvCE0AANug1voMtPfYZc7crRD-0TAfYfUh8H9UPydEGV8omFhpgYJ-33bdsQlKS0a4";

// Check for service worker
if ("serviceWorker" in navigator) {
  send().catch(err => console.error(err));
}

// Register SW, Register Push, Send Push
async function send() {
  // Register Service Worker
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("/sw.js", {
    scope: "/"
  });
  console.log("Service Worker Registered...");

  // Register Push
  console.log("Registering Push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log("Push Registered...");

  // Send Push Notification
//   console.log(subscription);
  console.log("Sending Push...");
  await fetch("/test", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
  console.log("Push Sent...");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}












/**
* checks if Push notification and service workers are supported by your browser
*/
// function isPushNotificationSupported() {
//     return "serviceWorker" in navigator && "PushManager" in window;
// }
// /**
// * asks user consent to receive push notifications and returns the response of the user, one of granted, default, denied
// */
// function initializePushNotifications() {
//     // request user grant to show notification
//     return Notification.requestPermission(function (result) {
//         return result;
//     });
// }
// /**
// * shows a notification
// */
// function sendNotification() {
//     console.log("here");
//     const img = "/images/mark.png";
//     const text = "Take a look at this brand new t-shirt!";
//     const title = "New Product Available";
//     const options = {
//         body: text,
//         icon: "/images/mark.png",
//         vibrate: [200, 100, 200],
//         tag: "new-product",
//         image: img,
//         badge: "https://spyna.it/icons/android-icon-192x192.png",
//         actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
//     };
//     navigator.serviceWorker.ready.then(function (serviceWorker, err) {
//         console.log(err);
//         serviceWorker.showNotification(title, options);
//     }).catch(e => {
//         console.log("err", e);
//     })
// }
// // const options = {
// //     body: "text",
// //     icon: "/images/mark.png",
// //     vibrate: [200, 100, 200],
// //     tag: "new-product",
// //     image: "/images/mark.png",
// //     badge: "https://spyna.it/icons/android-icon-192x192.png",
// //     actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
// // };
// // console.log("here2");
// // navigator.serviceWorker.showNotification("New Product Available", options);
// /**
// *
// */
// function registerServiceWorker() {
//     navigator.serviceWorker.register("/js/sw.js").then(function (swRegistration) {
//         //you can do something with the service wrker registration (swRegistration)
//     });
// }
// const pushNotificationSuported = isPushNotificationSupported();
// if (pushNotificationSuported) {
//     registerServiceWorker();
//     initializePushNotifications().then(function (consent) {
//         if (consent === 'granted') {
//             sendNotification();
//         }
//     });
// }

// const button = document.getElementById("notifications");
// button.addEventListener("click", () => {
//     Notification.requestPermission().then((result) => {
//         if (result === "granted") {
//             randomNotification();
//         }
//     });
// });
// var games = "abc"
// function randomNotification() {
//     const randomItem = Math.floor(Math.random() * games.length);
//     const notifTitle = "games[randomItem].name";
//     const notifBody = `Created by.`;
//     const notifImg = `/images.mark.png`;
//     const options = {
//         body: notifBody,
//         icon: notifImg,
//     };
//     new Notification(notifTitle, options);
//     setTimeout(randomNotification, 30000);
// }
// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("/js/sw.js").then((rs, err) => {
//         if (err) {
//             return console.log(err);
//         }
//         rs.periodicSync.register("get-latest-news", {
//             minInterval: 24 * 60 * 60 * 1000,
//         }).then((rs1, err1) => {
//             if (err1) {
//                 return console.log(err1);
//             }
//             console.log(rs);

//         })
//     }).catch(e => {
//         console.log(e);
//     })
// }
