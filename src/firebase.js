import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB264z-VCD6BvdzRwIgmdvCPyZarVUyKSc",
  authDomain: "ecommerce-96734.firebaseapp.com",
  projectId: "ecommerce-96734",
  storageBucket: "ecommerce-96734.firebasestorage.app",
  messagingSenderId: "638910227488",
  appId: "1:638910227488:web:c2769a12a34e2178eac845",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
