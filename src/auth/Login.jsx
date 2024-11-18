import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import Layout from '../Layout/Layout'
import TextField from '@mui/material/TextField';
import "../css/account.css"
import "../css/loginSignup.css"
import Line from "../assets/icons/line.png"
import Google from "../assets/icons/google.svg"
import toast from 'react-hot-toast'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [resetEmailSent, setResetEmailSent] = useState(false);
    const [resetError, setResetError] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("logged in successfully");
            toast.success("Logged in Successfully")
            setTimeout(() => {
                navigate(-1)
                setLoader(false)
            }, 2000)
        } catch (error) {
            setLoader(false)
            console.log(error.message);
            toast.error("Invalid Email or password")
        }
    }

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setLoader(true)
        try {
            await signInWithPopup(auth, provider);
            console.log('Logged in with Google');
            toast.success("Logged in Successfully")
            setTimeout(() => {
                navigate(-1)
                setLoader(false)
            }, 2000)
        } catch (error) {
            setLoader(false)
            console.log(error.message);
            toast.error("Login With Google Failed...")
        }
    };

    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setResetEmailSent(true);
            setResetError("");
            console.log("Password reset email sent");
            toast.success("Password reset Email sent");
        } catch (error) {
            setResetEmailSent(false);
            if (error.code === 'auth/user-not-found') {
                setResetError("The email address is not registered. Please check your email address.");
            } else if (error.code === 'auth/invalid-email') {
                setResetError("The email address is invalid. Please enter a valid email.");
            } else {
                setResetError("Failed to send password reset email. Please try again later.");
            }
            console.log(error.message);
            toast.error("Please enter a valid Email")
        }
    };


    return (
        <Layout>
            <div className="shopAllMain">
                <div className="topSide">
                    <div className="hideDiv"></div>
                </div>
                <div className='ProductPageMain ShopAll'>
                    <div className="hide initialBeforeLoginMain">
                        <div className='initialBeforeLogin loginBox'>
                            {loader ? <img src={SpinnerLoader} alt="" className='spinnerLoginLoader' /> : (
                                <>
                                    <div className="loginHeading">
                                        <p className='LoginRegisterHeading'>Login</p>
                                    </div>
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className="textFields">
                                            <div className='inputDiv'>
                                                <TextField
                                                    className='loginInput'
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    type="email"
                                                    value={email}
                                                    size="small"
                                                    required
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    InputLabelProps={{
                                                        style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                                                    }}
                                                />
                                            </div>
                                            <div className='inputDiv'>
                                                <TextField
                                                    className='loginInput'
                                                    id="outlined-basic"
                                                    label="Password"
                                                    variant="outlined"
                                                    type="Password"
                                                    value={password}
                                                    size="small"
                                                    required
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    InputLabelProps={{
                                                        style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                                                    }}
                                                />
                                                <div className="forgot-Password">
                                                    <p onClick={handleForgotPassword} style={{ cursor: "pointer", width: "fit-content" }}>Forgot Password ?</p>
                                                </div>
                                            </div>
                                            <button className='filterBtn loginBtn'>Login</button>
                                        </div>
                                    </form>
                                    <div className='login_bottom'>
                                        <img src={Line} alt="" />
                                        <button onClick={handleGoogleSignIn} className='googleBtn'><img src={Google} alt="" className='google-icon' />Sign-in with Google</button>
                                    </div>
                                    <div>
                                        <p className='registerTextMain'>Don't have an account? <span className='registerText'> <Link to='/account/register'> Register</Link></span></p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login