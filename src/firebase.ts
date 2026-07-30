import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHl-fIpVytDSliY3RPNNi3cr21_mSL5gQ",
  authDomain: "electrona-be.firebaseapp.com",
  projectId: "electrona-be",
  storageBucket: "electrona-be.firebasestorage.app",
  messagingSenderId: "24124679508",
  appId: "1:24124679508:web:14d5b31dcda233dbe2d4c1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
