import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl7VVRXha0JpMrBehgODccl_bygFxtF34",
  authDomain: "kwisatzhaderach.firebaseapp.com",
  projectId: "kwisatzhaderach",
  storageBucket: "kwisatzhaderach.appspot.com",
  messagingSenderId: "758417028958",
  appId: "1:758417028958:web:15bc7fb4fa7b624d1541cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
