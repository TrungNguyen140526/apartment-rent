import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKE,
    messagingSenderId: "605919037508",
    appId: "1:605919037508:web:588c25690772bf201ed411",
    measurementId: "G-B7RE8LW49L"
})

export const auth = app.auth()
export default app