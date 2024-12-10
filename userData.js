import { db } from "./firebase.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

const loginBtn = document.getElementById("login-btn");
const playGameBtn = document.getElementById("play-game");
const logoutBtn = document.getElementById("logout-btn");
const balanceSpan = document.getElementById("balance");
const passwordInput = document.getElementById("password");
const loginSection = document.getElementById("login-section");
const gameSection = document.getElementById("game-section");

let userPassword = "";

// Function to load user data from Firestore
async function loadUserData(password) {
    const userRef = doc(db, "users", password);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
        return userSnap.data();
    } else {
        await setDoc(userRef, { balance: 100 }); // Default balance for new users
        return { balance: 100 };
    }
}

// Function to save user data to Firestore
async function saveUserData(password, balance) {
    const userRef = doc(db, "users", password);
    await setDoc(userRef, { balance });
}

// Handle login
loginBtn.addEventListener("click", async () => {
    const password = passwordInput.value;
    if (!password) {
        alert("Please enter a password.");
        return;
    }
    userPassword = password;
    const userData = await loadUserData(password);
    balanceSpan.textContent = userData.balance;
    loginSection.style.display = "none";
    gameSection.style.display = "block";
});

// Handle game logic
playGameBtn.addEventListener("click", async () => {
    const currentBalance = parseInt(balanceSpan.textContent);
    const result = Math.random() < 0.5 ? -10 : 20; // Win or lose random amount
    const newBalance = currentBalance + result;
    balanceSpan.textContent = newBalance;
    await saveUserData(userPassword, newBalance);
    alert(result > 0 ? `You won ${result}!` : `You lost ${Math.abs(result)}!`);
});

// Handle logout
logoutBtn.addEventListener("click", () => {
    userPassword = "";
    balanceSpan.textContent = "";
    passwordInput.value = "";
    loginSection.style.display = "block";
    gameSection.style.display = "none";
});
