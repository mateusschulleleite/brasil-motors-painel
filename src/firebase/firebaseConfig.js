import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXPJVpvx_Ygbi_trAOo84VdVcILIv_29I",
  authDomain: "brasil-motors.firebaseapp.com",
  projectId: "brasil-motors",
  storageBucket: "brasil-motors.firebasestorage.app",
  messagingSenderId: "900904924062",
  appId: "1:900904924062:web:9426fa9b9fbd323e46dc8f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
