import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_NPPMCDk4kxYYsTg-SKT_in-HUHcQp0",
  authDomain: "chatgpt-messenger-79caf.firebaseapp.com",
  projectId: "chatgpt-messenger-79caf",
  storageBucket: "chatgpt-messenger-79caf.appspot.com",
  messagingSenderId: "82930117421",
  appId: "1:82930117421:web:81c082761f90a1de8541a4",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
