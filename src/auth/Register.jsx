import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from "./firebase"
import { setDoc, doc } from "firebase/firestore"
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFName] = useState("")
    const [lName, setLFName] = useState("")
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1);
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, number, password)
            const user = auth.currentUser
            console.log(user)
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fName,
                    lastName: lName,
                });
            }
            console.log("user Registered successfully")
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log('Logged in with Google');
            window.location.href = '/account';
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <Layout>
            <div>
                <form action="" onSubmit={handleRegister}>
                    <h3>Login</h3>
                    <div>
                        <label htmlFor="">FirstName</label>
                        <input
                            type="text"
                            placeholder='first name'
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">LastName</label>
                        <input
                            type="text"
                            placeholder='LastName'
                            value={lName}
                            onChange={(e) => setLFName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">EMail</label>
                        <input
                            type="email"
                            placeholder='email'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input
                            type="Password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button>Sign Up</button>
                </form>
                <button onClick={handleGoogleSignIn}>Sign up with Google</button>
                <button onClick={handleBack}>Back</button>
            </div>
        </Layout>
    )
}

export default Register