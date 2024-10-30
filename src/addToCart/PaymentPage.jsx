import React, { useEffect, useState } from 'react'
import "../css/paymentPage.css"
import { useLocation, useNavigate } from 'react-router-dom'
import CloseBtn from "../assets/icons/x.svg"
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import PlusRounded from "../assets/icons/plusRounded.svg"
import Ecom from "../assets/icons/ecom.svg"
import { auth, db } from '../auth/firebase'
import toast from 'react-hot-toast'
import { doc, getDoc } from 'firebase/firestore'
import InputFields from '../account/InputFields'
import Cash from "../assets/icons/PaymentMethods/cash.svg"
import UPI from "../assets/icons/PaymentMethods/upi.svg"
import Card from "../assets/icons/PaymentMethods/card.svg"
import NetBanking from "../assets/icons/PaymentMethods/net.svg"
import EMI from "../assets/icons/PaymentMethods/emi.svg"
import Wallets from "../assets/icons/PaymentMethods/Wallets.svg"
import PayLater from "../assets/icons/PaymentMethods/emi.svg"
import Delivery from "../assets/icons/PaymentMethods/delivery.svg"
import AnimationJSON from "../assets/icons/animation/paymentSuccess.json"
import Lottie from "lottie-react"
import Loader from '../pages/Loader'

const paymentMethods = [
  { name: "Cash on Delivery", img: Cash },
  { name: "UPI", img: UPI },
  { name: "CARD/Card EMI", img: Card },
  { name: "Net Banking", img: NetBanking },
  { name: "Cardless EMI", img: EMI },
  { name: "Wallets", img: Wallets },
  { name: "Pay Later", img: PayLater },
]

function PaymentPage({ setOpenPaymentPage }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems, totalAmount, couponCode, appliedCoupons } = location.state || {}
  console.log('Applied Coupons:', appliedCoupons);
  const [openAddInput, setOpenAddInput] = useState(false)
  const [savedAdd, setSaveAdd] = useState([])
  const [loader, setLoader] = useState(false);
  const [selectedAdd, setSelectedAdd] = useState({})
  const [selectedPayment, setSelectedPayment] = useState()
  const [select, setSelect] = useState()
  const [selectedAddId, setSelectedAddId] = useState(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
  const [addressPageOpen, setAddressPageOpen] = useState(false);
  const [shoeAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setAddressPageOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

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

  const handleSelectedAddress = (add) => {
    setSelectedAddId(add.company)
    setAddressPageOpen(false)
    console.log(add.company)
    setSelect(true)
    setSelectedAdd(add)
  }

  const handleSelectedPaymentMethod = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod.name)
    console.log(paymentMethod.name)
    setSelect(true)
    setSelectedPayment(paymentMethod.name)
  }

  const handleConfirmPayment = () => {
    try {
      if (selectedPayment !== undefined && selectedAdd.firstName !== undefined) {
        setLoader(true)
        setTimeout(() => {
          setLoader(false)
          setShowAnimation(true);
          setTimeout(() => {
            setShowAnimation(false);
            navigate('/')
          }, 3000)
        }, 3000)
      } else {
        console.log("Payment Error: Both payment method and address must be selected.");
        toast.error("Payment Error: Both payment method and address must be selected.")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  console.log('Selected payment : ' + selectedPayment)
  console.log("Selected address : " + selectedAdd.firstName)

  return (
    <div className="paymentPageInnerMain">
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
                      <p className='accountWelcomeBellavita savedAddHeadPaymentPage'>Saved Addresses</p>
                      {savedAdd.length > 0 ? (
                        <div className='addressMapping'>
                          <div className=' savedAddMainPaymentPage'>
                            {savedAdd.map((address, index) => (
                              <div key={index} className={` savedAddressSinglePaymentPage ${select ? selectedAddId == address.company ? "selectedAddressPaymentPage" : "" : ""}`} onClick={() => handleSelectedAddress(address)}>
                                <p className='userNameTopHeading fullBlackText paymentPageFont'>{address.company}</p>
                                <p className='userNameTopHeading fullBlackText paymentPageFont'>{`${address.firstName} ${address.lastName}`}</p>
                                <p className='savedAddressText paymentPageFontMini'>{`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.postalCode}, ${address.state}, ${address.country}`}</p>
                                <p className='userNameTopHeading fullBlackText paymentPageFont'>Phone Number : +91 {address.contactNumber}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                        :
                        (
                          <div className='noSavedAddress'>No Saved Address, Click above To Save Address</div>
                        )}
                    </div>}
                  </div>
                </div>)}
          </div>
        </div>
        <div className="paymentPageRightMain">
          {addressPageOpen ? <div className="PaymentLeftSide">
            <div className="paymentPageHeading paymentPageHeadingMini">
              <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>Shipping Address</p>
              <img src={CloseBtn} alt="" onClick={() => setAddressPageOpen(false)} />
            </div>
            {openAddInput ?
              (<div className='inputFiledMainMini'>
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
                      <p className='accountWelcomeBellavita savedAddHeadPaymentPage'>Saved Addresses</p>
                      {savedAdd.length > 0 ? (
                        <div className='addressMappingMini'>
                          <div className=' savedAddMainPaymentPage'>
                            {savedAdd.map((address, index) => (
                              <div key={index} className={` savedAddressSinglePaymentPage ${select ? selectedAddId == address.company ? "selectedAddressPaymentPage" : "" : ""}`} onClick={() => handleSelectedAddress(address)}>
                                <p className='userNameTopHeading fullBlackText paymentPageFont'>{address.company}</p>
                                <p className='userNameTopHeading fullBlackText paymentPageFont'>{`${address.firstName} ${address.lastName}`}</p>
                                <p className='savedAddressText paymentPageFontMini'>{`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.postalCode}, ${address.state}, ${address.country}`}</p>
                                <p className='userNameTopHeading fullBlackText paymentPageFont'>Phone Number : +91 {address.contactNumber}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                        :
                        (
                          <div className='noSavedAddress'>No Saved Address, Click above To Save Address</div>
                        )}
                    </div>}
                  </div>
                </div>)}
          </div>
            :
            <>
              <div className="paymentPageHeading">
                <p className='accountWelcomeBellavita paymentPageTopHeading'>Order Summary</p>
                <div className='orderTotalAndCloseBtn'>
                  <p className='accountWelcomeBellavita  paymentPageTopHeading'>₹{totalAmount}</p>
                  <img src={CloseBtn} alt="" onClick={() => navigate(-1)} />
                </div>
              </div>
              <div className="paymentPageContent">
                <p className='accountWelcomeBellavita paymentOptionsHeadPaymentPage '>Select Payment Method</p>
                <div className="paymentOptionsMain">
                  {paymentMethods.map((payment, index) => (
                    <div className={`paymentMethodsSingleMain ${select ? selectedPaymentMethod == payment.name ? "selectedPaymentMethod" : "" : ""}`} onClick={() => handleSelectedPaymentMethod(payment)}>
                      <div className='paymentOptionNameImgAmount'>
                        <div className="paymentOptImgName">
                          <img src={payment.img} alt="" />
                          <span className='paymentOptFont'>{payment.name}</span>
                        </div>
                      </div>
                      <div className="paymentPageFreeGiftDiv">
                        <div className="totalAmountOfTrans">
                          <span className='paymentOptFont paymentOptAmountFont'>₹{totalAmount}</span>
                        </div>
                        <span className='freeGiftText'>Free gift worth ₹99</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chosenAddressDiv">
                <div className="chosenAddress">
                  <span className='paymentOptFont paymentOptAmountFont deliverHeadAndSelectAddress'>
                    <span className='deliveryIconAndText'>
                      <img src={Delivery} alt="" />
                      <span className='yyyy'>Deliver To,</span>
                    </span>
                    <span className='selectAddress750Px' onClick={() => setAddressPageOpen(true)}>
                      Select Address
                    </span>
                  </span>
                  {selectedAdd.firstName ? <>
                    <span className='paymentOptFont paymentOptAmountFont'>Name :&nbsp;{selectedAdd.firstName + " " + selectedAdd.lastName}</span>
                    <span className='chosenFullAddress'>{selectedAdd.company + ", " + selectedAdd.addressLine1 + ", " + selectedAdd.addressLine2 + ", " + selectedAdd.city + ", " + selectedAdd.postalCode + ", " + selectedAdd.state + ", " + selectedAdd.country + ", Mo : " + selectedAdd.contactNumber}</span>
                  </> : <div className='addressNotSelectedText'>
                    <span className='paymentOptFont paymentOptAmountFont addressNotSelect'>address not selected!,</span>
                    <span className='chosenFullAddress'>please select address first.</span>
                  </div>}
                </div>
              </div>
              <div className="ConfirmPayment">
                <p className='shippingText selectedPaymentMet'>Pay Via : <span className='shippingPolicyLinkText'>{selectedPayment}</span></p>
                <button className='filterBtn confirmPaymentBtn' onClick={handleConfirmPayment}>{loader ? <div className='btnLoader'><Loader /></div> : "Confirm Payment"}</button>
              </div>
            </>
          }
        </div>
      </div>
      <div className="pricingBottom">
        <span >Secured by </span>
        <img src={Ecom} alt="" />
      </div>
      {shoeAnimation ?
        <div className='animationMain'>
          <div className="animationSuccess">
            <Lottie
              animationData={AnimationJSON}
            />
          </div>
        </div>
        : ""}
    </div>
  )
}

export default PaymentPage