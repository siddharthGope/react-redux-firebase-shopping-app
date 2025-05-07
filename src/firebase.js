import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuA3jof7I33KbKxj4Np1kWTlaf0lGjBSA",
  authDomain: "react-reduxtk-auth.firebaseapp.com",
  projectId: "react-reduxtk-auth",
  storageBucket: "react-reduxtk-auth.firebasestorage.app",
  messagingSenderId: "547598062134",
  appId: "1:547598062134:web:63d4164eda7d29f1263e97",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
