import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { auth, db } from '../auth/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import "../css/account.css"

function Account() {
  const [userDetails, setUserDetails] = useState(null)
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate()

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
    })
  }

  async function handleLogOut() {
    try {
      await auth.signOut()
      window.location.href = "/account"
      console.log("user is logged out")
    } catch (error) {
      console.error("log out error", error.message)
    }
  }

  const handleResetPassword = async () => {
    if (userDetails && userDetails.email) {
      try {
        await sendPasswordResetEmail(auth, userDetails.email);
        setResetEmailSent(true);
        console.log("Password reset email sent");
      } catch (error) {
        console.error("Error sending password reset email", error.message);
      }
    } else {
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
          <div className="hide">
            <div>
              {userDetails ? (<div className="userDetails">
                <p>EMail : {userDetails.email}</p>
                <p>First Name : {userDetails.firstName}</p>
                <p>Last Name : {userDetails.lastName}</p>
                <button onClick={handleLogOut}>LogOut</button>
                <div>
                  <button onClick={handleResetPassword}>Reset Password</button>
                  {resetEmailSent && <p>Password reset email has been sent to {userDetails.email}</p>}
                </div>
              </div>)
                :
                (<div className='initialBeforeLoginMain'>
                  <div className='initialBeforeLogin'>
                    <p className='accountWelcomeBellavita'>Welcome to BellaVita</p>
                    <p className='accountEMoji'>🤩</p>
                    <div className="accountText">
                      <p style={{fontWeight: "600", color : "black"}}>You are not Login !</p>
                      <p>Click on Below Login Button to Login or Register Yourself.</p>
                      <p>or Click on Back Button to go Homepage</p>
                    </div>
                    <div className="accountBtn">
                      <button onClick={handleOpenLogin} className='filterBtn login-register-Btn'>Login or Register</button>
                      <button onClick={handleBack} className='sortBtn back-Btn'>Back</button>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Account