// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAk2t7WMjWqvcmvEP_mndKfNEZPCgzsJw',
  authDomain: 'netflix-clone-yt-784db.firebaseapp.com',
  projectId: 'netflix-clone-yt-784db',
  storageBucket: 'netflix-clone-yt-784db.appspot.com',
  messagingSenderId: '458155746370',
  appId: '1:458155746370:web:9ac46c17fb7b92f6f179db',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
