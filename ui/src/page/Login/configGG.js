import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC2stLiEHt6HzDNhwMZt7nRUiFd_BNS_Yc",
  authDomain: "restaurant-a09f9.firebaseapp.com",
  projectId: "restaurant-a09f9",
  storageBucket: "restaurant-a09f9.appspot.com",
  messagingSenderId: "652619236637",
  appId: "1:652619236637:web:b548ec351386215cdd8df4",
  measurementId: "G-CKX9YEV5Q2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export{auth, provider}