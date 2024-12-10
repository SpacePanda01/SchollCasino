// Importiere die Funktionen, die du von Firebase benötigst
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importiere Firestore
import { getAnalytics } from "firebase/analytics";

// Deine Firebase-Konfiguration (ersetze diese durch deine tatsächlichen Firebase-Daten)
const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN_AUTH_DOMAIN",
  projectId: "DEIN_PROJECT_ID",
  storageBucket: "DEIN_STORAGE_BUCKET",
  messagingSenderId: "DEIN_MESSAGING_SENDER_ID",
  appId: "DEIN_APP_ID",
  measurementId: "DEIN_MEASUREMENT_ID"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore initialisieren
const db = getFirestore(app); // Zugriff auf Firestore
