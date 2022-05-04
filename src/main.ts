import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-y5F9G38CYSZu2Po4hLrdehQy-MBvr44",
  authDomain: "financeapp-b1fc3.firebaseapp.com",
  projectId: "financeapp-b1fc3",
  storageBucket: "financeapp-b1fc3.appspot.com",
  messagingSenderId: "281132686337",
  appId: "1:281132686337:web:bb76b6c068aab8797db400",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
