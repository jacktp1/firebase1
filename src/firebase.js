import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Normally you’d load these from environment variables on Render
const firebaseConfig = {
  apiKey: "AIzaSyCbDlAbvamLfQk-L0TWf0Il34BPdjNJqsU",
  authDomain: "render-app-dd547.firebaseapp.com",
  databaseURL: "https://render-app-dd547-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "render-app-dd547",
  storageBucket: "render-app-dd547.firebasestorage.app",
  messagingSenderId: "324834411401",
  appId: "1:324834411401:web:9a3648321f30d762335758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
