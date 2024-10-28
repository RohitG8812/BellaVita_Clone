import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { auth, db } from '../auth/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import "../css/account.css"
import toast from 'react-hot-toast'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"


function Account() {
  const [userDetails, setUserDetails] = useState(null)
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        // If the user is logged in with Google, use the available user data
        const { email, displayName } = user;
        const firstName = displayName?.split(' ')[0] || '';
        const lastName = displayName?.split(' ')[1] || '';

        // Try fetching additional user data from Firestore
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Merge Firestore data with Google user data if needed
          setUserDetails({
            ...docSnap.data(),
            email: email || docSnap.data().email,
            firstName: firstName || docSnap.data().firstName,
            lastName: lastName || docSnap.data().lastName,
          });
          console.log(docSnap.data());
        } else {
          // If no Firestore data exists, use Google user data
          setUserDetails({
            email,
            firstName,
            lastName,
          });
          console.log("User logged in with Google");
        }
      } else {
        console.log("User is not logged in");
        setUserDetails(null);
      }
      setLoader(false)
    })
  }

  async function handleLogOut() {
    setLoader(true)
    try {
      await auth.signOut()
      toast.success("Log Out Successful")
      setTimeout(() => {
        navigate("/account")
        setLoader(false)
      }, 2000)
    } catch (error) {
      setLoader(false)
      toast.error(error.message)
      console.error("log out error", error.message)
    }
  }

  const handleResetPassword = async () => {
    if (userDetails && userDetails.email) {
      setLoader(true)
      try {
        await sendPasswordResetEmail(auth, userDetails.email);
        console.log("Password reset email sent");
        setTimeout(() => {
          setLoader(false)
          toast.success("Password reset Email sent");
          setResetEmailSent(true);
        }, 1000)
      } catch (error) {
        toast.error(error.message)
        setLoader(false)
        console.error("Error sending password reset email", error.message);
      }
    } else {
      setLoader(false)
      toast.error(error.message)
      console.log("No email address available for password reset");
    }
  };

  useEffect(() => {
    fetchUserData()
  }, [])

  const handleOpenLogin = () => {
    navigate('/account/login')
  }

  const handleBack = () => {
    navigate('/')
  }
  return (
    <Layout>
      <div className="shopAllMain">
        <div className="topSide">
          <div className="hideDiv"></div>
        </div>
        <div className='ProductPageMain ShopAll'>
          <div className="hide accountDetailsMain">
            {loader ? <div className='spinnerLoaderContent'><img src={SpinnerLoader} alt="" className='spinnerLoginLoader' /> </div> : (<div className=''>
              {userDetails ? (<div className="userDetails">
                <div className="accountDetailsTopSection">
                  <div className="acTopSecTopSide">
                    <div className="acSecTopLeftSide">
                      <span className='accountWelcomeBellavita'>Welcome,</span>
                      <span className='userNameTopHeading'> {userDetails.firstName}</span>
                    </div>
                    <div className="acSecTopRightSide">
                      <p className='logOutOption accountLogoutResetPass' onClick={handleLogOut}>LogOut</p>
                      <p className='accountLogoutResetPass' onClick={handleResetPassword}>Change Password</p>
                    </div>
                  </div>
                  <div className="acTopSecBottomSide">
                    <p className='singleLineEmailCOntact middleLine' ><span className='userNameTopHeading'>Email</span> <span className='emailContText '>{userDetails.email}</span></p>
                    <p className='singleLineEmailCOntact' ><span className='userNameTopHeading'>Contact</span> <span className='emailContText'>{userDetails.number ? (`+91${userDetails.number}`) : "Not Available"}</span></p>
                  </div>
                </div>
                <div className="accountDetailsBottomSection">
                  <div className="accountDetailsBottomTop">
                    <div className='accountDetailsNavMain'>
                      <NavLink to="profile" end className={(e) => `${e.isActive ? "accountActiveNav" : ""} accountDetailsNav`}>
                        <span>Profile</span>
                      </NavLink>
                      <NavLink to="address" className={(e) => `${e.isActive ? "accountActiveNav" : ""} accountDetailsNav`}>
                        <span>Address</span>
                      </NavLink>
                      <NavLink to="orders" className={(e) => `${e.isActive ? "accountActiveNav" : ""} accountDetailsNav`}>
                        <span>Orders </span>
                      </NavLink>
                      <NavLink to="cashBack" className={(e) => `${e.isActive ? "accountActiveNav" : ""} accountDetailsNav`}>
                        <span>Cashback </span>
                      </NavLink>
                    </div>
                  </div>
                  <div className="accountOutletComponent">
                    <Outlet context={userDetails} />
                  </div>
                </div>
              </div>)
                :
                (<div className='initialBeforeLoginMain'>
                  <div className='initialBeforeLogin'>
                    <p className='accountWelcomeBellavita'>Welcome to BellaVita</p>
                    <p className='accountEMoji'>🤩</p>
                    <div className="accountText">
                      <p style={{ fontWeight: "600", color: "black" }}>You are not Login !</p>
                      <p >Click on Below Login Button to Login or Register Yourself.</p>
                      <p>or Click on Back Button to go Homepage</p>
                    </div>
                    <div className="accountBtn">
                      <button onClick={handleOpenLogin} className='filterBtn login-register-Btn'>Login or Register</button>
                      <button onClick={handleBack} className='sortBtn back-Btn'>Back</button>
                    </div>
                  </div>
                </div>)}
            </div>)}
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Account