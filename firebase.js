// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEsV9ltkdqcVq0b7BaxUacoNIuZroYrk",
  authDomain: "the-organic-verse.firebaseapp.com",
  projectId: "the-organic-verse",
  storageBucket: "the-organic-verse.appspot.com",
  messagingSenderId: "654120641472",
  appId: "1:654120641472:web:1b65edca9c8a7ae7ad9e25",
  measurementId: "G-6N7Z1EE75G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebaseConfig };
