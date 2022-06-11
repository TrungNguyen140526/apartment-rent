import { Card, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from "../firebase"
import React from "react"


export default function Login() {
    const navigate = useNavigate()


    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((re) => {
                console.log(re)
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px " }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            <Button onClick={signInWithGoogle} className="w-100 mt-3">Sign In With Google</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
