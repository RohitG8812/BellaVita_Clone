import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from "./firebase"
import { setDoc, doc } from "firebase/firestore"
import Layout from '../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import "../css/account.css"
import "../css/loginSignup.css"
import Line from "../assets/icons/line.png"
import Google from "../assets/icons/google.svg"
import toast from 'react-hot-toast'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import { InputAdornment } from '@mui/material'

function Register() {
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFName] = useState("")
    const [lName, setLFName] = useState("")
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoader(true)
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fName,
                    lastName: lName,
                    number: number
                });
            }
            console.log("user Registered successfully")
            toast.success("Registered Successfully")
            setTimeout(() => {
                navigate("/account")
                setLoader(false)
            }, 2000)
        } catch (error) {
            setLoader(false)
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setLoader(true)
        try {
            await signInWithPopup(auth, provider);
            toast.success("Registered Successfully")
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
                                        <p className='LoginRegisterHeading'>Register</p>
                                    </div>
                                    <form action="" onSubmit={handleRegister}>
                                        <div className="textFields">
                                            <div className='registeredNameDiv'>
                                                <div>
                                                    <TextField
                                                        className='nameInput'
                                                        id="outlined-basic"
                                                        label="Firstname"
                                                        variant="outlined"
                                                        type="text"
                                                        value={fName}
                                                        size="small"
                                                        required
                                                        onChange={(e) => setFName(e.target.value)}
                                                        InputLabelProps={{
                                                            style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        className='nameInput'
                                                        id="outlined-basic"
                                                        label="Lastname"
                                                        variant="outlined"
                                                        type="text"
                                                        value={lName}
                                                        size="small"
                                                        required
                                                        onChange={(e) => setLFName(e.target.value)}
                                                        InputLabelProps={{
                                                            style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='inputDiv'>
                                                <TextField
                                                    className='registerInput '
                                                    id="outlined-basic"
                                                    label="Contact Number"
                                                    variant="outlined"
                                                    type="number"
                                                    value={number}
                                                    size="small"
                                                    required
                                                    onChange={(e) => setNumber(e.target.value)}
                                                    InputLabelProps={{
                                                        style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                                                    }}
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: <InputAdornment position="start">+91 </InputAdornment>,
                                                        },
                                                    }}
                                                />
                                            </div>
                                            <div className='inputDiv'>
                                                <TextField
                                                    className='registerInput'
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
                                                    className='registerInput'
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
                                            </div>
                                            <button className='filterBtn loginBtn'>Register</button>
                                        </div>
                                    </form>
                                    <div className='login_bottom'>
                                        <img src={Line} alt="" />
                                        <button onClick={handleGoogleSignIn} className='googleBtn'><img src={Google} alt="" className='google-icon' />Register with Google</button>
                                    </div>
                                    <div>
                                        <p className='registerTextMain'>Already have an account? <span className='registerText'> <Link to='/account/login'> Login</Link></span></p>
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

export default Register