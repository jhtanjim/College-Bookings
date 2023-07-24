// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFpNvlNomt7_khxuMLfA9PI0LGw4bpYKE",
    authDomain: "college-booking-c1050.firebaseapp.com",
    projectId: "college-booking-c1050",
    storageBucket: "college-booking-c1050.appspot.com",
    messagingSenderId: "779191889937",
    appId: "1:779191889937:web:adc9f55f65ce612fe901b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app