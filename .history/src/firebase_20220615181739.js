import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "G-B7RE8LW49L",
})

export const auth = app.auth()
export default app