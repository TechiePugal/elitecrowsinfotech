// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGvtDcFhE9gSQUeKTq8MwaqSuxFHjC13U",
  authDomain: "pugalfolio.firebaseapp.com",
  databaseURL: "https://pugalfolio-default-rtdb.firebaseio.com",
  projectId: "pugalfolio",
  storageBucket: "pugalfolio.firebasestorage.app",
  messagingSenderId: "17589199201",
  appId: "1:17589199201:web:3b2e7f0fd940d812446520",
  measurementId: "G-THXRGHNLYF",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
let analytics: any = null
let db: any = null
let storage: any = null

// Only initialize analytics in browser environment
if (typeof window !== "undefined") {
  analytics = getAnalytics(app)
}

// Initialize Firestore
db = getFirestore(app)

// Initialize Storage
storage = getStorage(app)

export { app, analytics, db, storage }
