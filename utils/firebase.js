import "firebase/messaging";
import firebase from "firebase/app";

const firebaseCloudMessaging = {
    init: async () => {
        if (!firebase?.apps?.length) {

            // Initialize the Firebase app with the credentials
            firebase?.initializeApp({
                apiKey: "BCJcEu7yry5KcTAyPp-_uPIm-tX0ThltRSiYhXyrFda9uJ_sW1OO2dfsAE7LtFo-eLJUXN-XPbJ28jSCyfSNCDE",
                authDomain: "localhost:3000",
                projectId: "vigilant-guru-356106",
                storageBucket: "your_storage_bucket",
                messagingSenderId: "507355988437",
                appId: "1:507355988437:web:abef86ea42b0bde8c37d5c",
            });

            try {
                const messaging = firebase.messaging();

                // Request the push notification permission from browser
                const status = await Notification.requestPermission();
                if (status && status === "granted") {
                    // Get new token from Firebase
                    const fcm_token = await messaging.getToken({
                        vapidKey: "your_web_push_certificate_key_pair",
                    });

                    // Set token in our local storage
                    if (fcm_token) {
                        return fcm_token;
                    }
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    },
};
export { firebaseCloudMessaging };
