import React, { useEffect, useState } from 'react'
import "../css/paymentPage.css"
import { useLocation, useNavigate } from 'react-router-dom'
import CloseBtn from "../assets/icons/x.svg"
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import PlusRounded from "../assets/icons/plusRounded.svg"
import Ecom from "../assets/icons/ecom.svg"

import { auth, db } from '../auth/firebase'
import { toast } from 'react-toastify'
import { doc, getDoc } from 'firebase/firestore'
import InputFields from '../account/InputFields'


function PaymentPage({ setOpenPaymentPage }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems, totalAmount, couponCode, appliedCoupons } = location.state || {}
  console.log('Applied Coupons:', appliedCoupons);
  const [openAddInput, setOpenAddInput] = useState(false)
  const [savedAdd, setSaveAdd] = useState([])
  const [loader, setLoader] = useState(false);
  const [selectedAdd, setSelectedAdd] = useState({})
  const [select, setSelect] = useState()

  useEffect(() => {
    setLoader(true)
    const fetchAddress = async () => {
      const user = auth.currentUser;
      if (!user) {
        return;
      }

      try {
        const userDocRef = doc(db, "Users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setSaveAdd(userData.addresses || []);
        }
        setLoader(false)
      } catch (error) {
        setLoader(false)
        console.log("Error fetching addresses:", error.message);
        toast.error("Failed to fetch saved addresses");
      }
    }
    fetchAddress()
  }, [openAddInput, setSaveAdd])

  const selectedAddress = (add) => {
    
  }

  return (
    <div className='paymentPageMain'>
      <div className="paymentPageLeftMain">
        <div className="PaymentLeftSide">
          <div className="paymentPageHeading">
            <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>Shipping Address</p>
          </div>
          {openAddInput ?
            (<div className='inputFiledMain'>
              <InputFields setOpenAddInput={setOpenAddInput} />
            </div>)
            : (
              <div className='PaymentPageAddMain'>
                <div className='login_bottom addressMainPaymentPage'>
                  <button onClick={() => setOpenAddInput(true)} className='googleBtn addAddressBtn addAddressBtnPaymentPage'>
                    <img src={PlusRounded} alt="" className='google-icon' />
                    New Address
                  </button>
                  {loader ? <div className='PaymentPageLoader'><img src={SpinnerLoader} alt='loader' /></div> : <div>
                    {savedAdd.length > 0 ? (
                      <>
                        <p className='accountWelcomeBellavita savedAddHeadPaymentPage'>Saved Addresses</p>
                        <div className='SavedAddMain savedAddMainPaymentPage'>
                          {savedAdd.map((address, index) => (
                            <div key={index} className='savedAddressSingle savedAddressSinglePaymentPage'>
                              <p className='userNameTopHeading fullBlackText paymentPageFont'>{address.company}</p>
                              <p className='userNameTopHeading fullBlackText paymentPageFont'>{`${address.firstName} ${address.lastName}`}</p>
                              <p className='savedAddressText paymentPageFontMini'>{`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.postalCode}, ${address.state}, ${address.country}`}</p>
                              <p className='userNameTopHeading fullBlackText paymentPageFont'>Phone Number : +91 {address.contactNumber}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )
                      :
                      (
                        <div className='noSavedAddress'>No Saved Address, Click below To Save Address</div>
                      )}
                  </div>}
                </div>
                <div className="pricingBottom">
                  <span >Secured by </span>
                  <img src={Ecom} alt="" />
                </div>
              </div>)}
        </div>
      </div>
      <div className="paymentPageRightMain">
        <div className="paymentPageTopMini">
          paymentPageTopMini
        </div>
        <div className="paymentPageBottom">
          <div className="paymentPageHeading">
            <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>Order Summary</p>
            <div className='orderTotalAndCloseBtn'>
              <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>₹{totalAmount}</p>
              <img src={CloseBtn} alt="" onClick={() => navigate(-1)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage