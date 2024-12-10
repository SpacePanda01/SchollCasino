// Importiere die notwendigen Funktionen von Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase Konfiguration (mit deinen eigenen Daten aus der Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyD-6gFTxqwl8JBXS9y2dRT6xQxA0bBP5cU",
  authDomain: "casino-be6a5.firebaseapp.com",
  projectId: "casino-be6a5",
  storageBucket: "casino-be6a5.firebasestorage.app",
  messagingSenderId: "675284022108",
  appId: "1:675284022108:web:45474ec2b37faa7cb08799",
  measurementId: "G-K2ESKBG75Q"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Benutzer registrieren
function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Benutzer erfolgreich registriert:", user);
      // Hier kannst du Benutzerdaten in Firestore speichern, z.B. initiale Währung
      saveUserBalance(user.uid, 100); // Beispiel, Währung auf 100 setzen
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Fehler bei der Registrierung:", errorCode, errorMessage);
    });
}

// Benutzer einloggen
function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Benutzer erfolgreich eingeloggt:", user);
      // Weiterleitung zur Benutzeroberfläche nach dem Login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Fehler beim Einloggen:", errorCode, errorMessage);
    });
}

// Benutzer abmelden
function logoutUser() {
  signOut(auth)
    .then(() => {
      console.log("Benutzer erfolgreich abgemeldet");
      // Weiterleitung zur Login-Seite oder Anzeigebereich
    })
    .catch((error) => {
      console.error("Fehler beim Abmelden:", error);
    });
}

// Benutzerwährung speichern
function saveUserBalance(userId, balance) {
  const userRef = doc(db, "users", userId);
  setDoc(userRef, {
    balance: balance
  })
  .then(() => {
    console.log("Benutzerwährung erfolgreich gespeichert!");
  })
  .catch((error) => {
    console.error("Fehler beim Speichern der Währung:", error);
  });
}

// Benutzerwährung abrufen
function getUserBalance(userId) {
  const userRef = doc(db, "users", userId);
  getDoc(userRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Benutzerwährung:", docSnap.data().balance);
      } else {
        console.log("Kein Dokument gefunden!");
      }
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Währung:", error);
    });
}

export { registerUser, loginUser, logoutUser, saveUserBalance, getUserBalance };
