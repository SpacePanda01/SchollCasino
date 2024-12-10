// userData.js oder App.js (wo immer du es brauchst)
import { db } from './firebase'; // importiere Firestore aus firebase.js
import { collection, addDoc } from "firebase/firestore";

// Funktion, um Benutzerdaten zu speichern
async function saveUserData(name, email) {
  try {
    // Speichere den neuen Benutzer in der Firestore-Collection "users"
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
    });
    console.log("Benutzer hinzugefügt mit ID: ", docRef.id);
  } catch (e) {
    console.error("Fehler beim Hinzufügen des Benutzers: ", e);
  }
}
