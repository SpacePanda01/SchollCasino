import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from './firebase';  // Importiere db aus firebase.js

// Benutzerwährung speichern
function saveUserBalance(userId, balance) {
  const userRef = doc(db, "users", userId);  // Benutzerdokument in Firestore
  setDoc(userRef, { balance: balance })  // Speichert die Währung des Benutzers
    .then(() => {
      console.log("Benutzerwährung erfolgreich gespeichert!");
    })
    .catch((error) => {
      console.error("Fehler beim Speichern der Währung:", error);
    });
}

// Benutzerwährung abrufen
function getUserBalance(userId) {
  const userRef = doc(db, "users", userId);  // Benutzerdokument in Firestore
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

// Weitere Funktionen, die mit den Benutzerdaten zu tun haben, können hier hinzugefügt werden.

export { saveUserBalance, getUserBalance };
