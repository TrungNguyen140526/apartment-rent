import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "sw-architecture-and-design-392.appspot.com",
    messagingSenderId: "605919037508",
    appId: "1:605919037508:web:588c25690772bf201ed411",
    measurementId: "G-B7RE8LW49L",
})

export const auth = app.auth()
export default app