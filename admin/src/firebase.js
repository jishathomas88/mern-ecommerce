// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCnL-4RSuyD1fKCU5n7SGZm_kUviS8bOk",
  authDomain: "shop-d7524.firebaseapp.com",
  projectId: "shop-d7524",
  storageBucket: "shop-d7524.appspot.com",
  messagingSenderId: "824139995206",
  appId: "1:824139995206:web:c41d176583b5433a505247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app