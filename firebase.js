// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-6gFTxqwl8JBXS9y2dRT6xQxA0bBP5cU",
    authDomain: "casino-be6a5.firebaseapp.com",
    projectId: "casino-be6a5",
    storageBucket: "casino-be6a5.appspot.com",
    messagingSenderId: "675284022108",
    appId: "1:675284022108:web:45474ec2b37faa7cb08799",
    measurementId: "G-K2ESKBG75Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
