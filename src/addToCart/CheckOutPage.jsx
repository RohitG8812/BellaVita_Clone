import React, { useEffect, useState } from 'react'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import "../css/checkOut.css"
import Loader from '../pages/Loader';
import CloseBtn from "../assets/icons/x.svg"
import BackBtn from "../assets/icons/leftArrow.svg"
import Tag from "../assets/icons/tag.svg"
import DoneIcon from "../assets/icons/doneRounded.svg"
import DiscountIcon from "../assets/icons/discount.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import CartIcon from "../assets/icons/cart12.png"
import Ecom from "../assets/icons/ecom.svg"
import Gift from "../assets/icons/gift.svg"
import Clock from "../assets/icons/clock.svg"
import DownArrow from "../assets/icons/down.svg"
import RightIcon from "../assets/icons/rightArrow.svg"
import { useNavigate } from 'react-router-dom';
import { InputAdornment, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import PaymentPage from './PaymentPage';

const CouponsVariety = [
    { name: "HDFC Card Offer", code: "HDFC5", desc: "Get 5% OFF with no minimum order value on HDFC Credit & Debit cards.", id: 102, img: DiscountIcon, discount: 5 },
    { name: "Get 10% Off on MOBIKWIK", code: "MBK1024", desc: "Get 10% Discount on MobiKwik Wallet.", id: 101, img: DiscountIcon, discount: 10 },
    { name: "Get 5% Off on AMAZON Pay", code: "AMZ0625", desc: "Get 5% Flat Discount on Amazon Pay.", id: 103, img: DiscountIcon, discount: 5 },
    { name: "10% Off on CRED Pay", code: "CRED10", desc: "Get Flat 10% Discount by using CRED Pay.", id: 104, img: DiscountIcon, discount: 10 },
]

const Discount = [
    { name: "BUY MORE SAVE MORE", img: DoneIcon, id: 105 },
    { name: "FREE Delivery. limited Period offer", img: Clock, id: 106 },
    { name: "FREE Gift on all Orders", img: Gift, id: 107 },
]


function CheckOutPage({ setOpenCheckOutPage, cartItems, toggleDrawer, handleRemoveProductFromCart, cartItemCount }) {
    const [couponsVariety, setCouponVariety] = useState(CouponsVariety)
    const [loader, setLoader] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);
    const [couponPageOpen, setCouponPageOpen] = useState(false);
    const [couponCode, setCouponCode] = useState("")
    const [appliedCoupons, setAppliedCoupons] = useState(Discount)
    const [couponPageOpenMini, setCouponPageOpenMini] = useState(false);
    const [openPaymentPage, setOpenPaymentPage] = useState(false);
    const [showInvalidCoupon, setShowInvalidCoupon] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 500);
    }, [])

    useEffect(() => {
        if (document.body.offsetWidth > 750) {
            setCouponPageOpenMini(false)
        }
    })

    const handleCouponClick = (coupon) => {
        try {
            setLoader(true);
            const isCouponAlreadyApplied = appliedCoupons.some((appliedCoupon) => appliedCoupon.code === coupon.code);
            const isMaxCouponsReached = appliedCoupons.length >= 4;

            if (isMaxCouponsReached) {
                setTimeout(() => {
                    setLoader(false)
                    toast.error("only 1 coupon can be applied at a time.");
                    return;
                }, 500)
            } else if (!isCouponAlreadyApplied) {
                const newCoupon = {
                    name: coupon.name,
                    img: coupon.img,
                    id: coupon.id,
                    discount: coupon.discount,
                };
                setTimeout(() => {
                    toast.success("Coupon applied successfully");
                    setLoader(false)
                    setAppliedCoupons(prevCoupon => [...prevCoupon, newCoupon]);
                    setCouponPageOpen(false)
                    setCouponPageOpenMini(false)
                }, 500)
            } else {
                setTimeout(() => {
                    toast.error("This coupon is already applied.");
                    setLoader(false)
                }, 500)
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error.message)
        }
    }

    const handleInvalidCouponCode = () => {
        if (couponCode.length > 0) {
            toast.error("Invalid coupon code")
            setCouponCode("")
        } else {
            toast.warning("Please enter a code first.")
        }
    }

    const cartTotalAmount = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
            return total + itemPrice * item.quantity;
        }, 0).toFixed(2)
    }

    const initialDiscountAmount = () => {
        return (cartTotalAmount() * 5) / 100
    }

    const totalDiscountPercentage = appliedCoupons.reduce((acc, coupon) => {
        return acc + (coupon.discount || 0);
    }, 0);

    const couponDiscountAmount = () => {
        const discountedAmount = cartTotalAmount() - initialDiscountAmount();
        return ((discountedAmount * totalDiscountPercentage) / 100).toFixed(2)
    };

    const totalAmountAfterDiscount = (cartTotalAmount() - initialDiscountAmount() - couponDiscountAmount()).toFixed(2)

    const handlePaymentPage = () => {
        try {
            setBtnLoader(true);
            setTimeout(() => {
                setBtnLoader(false)
                setOpenPaymentPage(true)
            }, 1000)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            {openPaymentPage ? <PaymentPage setOpenPaymentPage={setOpenPaymentPage} />
                :
                <div className='checkOutPageMain'>
                    {/* Left Side Page */}
                    <div className="checkOutLeftSideMain">
                        <div className="checkOutLeftSide">
                            <div className="pricingTop">
                                <div className="CartSectionHeading cartIconOrderSummary">
                                    <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>Order Summary</p>
                                    <img src={CartIcon} alt="" />
                                </div>
                                <div className="cheOutLeftSideBottomContent">
                                    <div className="pricingSection">
                                        <div className="subTotal  pricingDiv">
                                            <span>Subtotal</span>
                                            <span>₹{cartTotalAmount()}</span>
                                        </div>
                                        <div className="couponDiscount pricingDiv">
                                            <span>Buy More Save More - 5%</span>
                                            <span>- ₹{initialDiscountAmount()}</span>
                                        </div>
                                        <div className="couponDiscount pricingDiv">
                                            <span>Coupon Discount - {totalDiscountPercentage}%</span>
                                            <span>- ₹{couponDiscountAmount()}</span>
                                        </div>
                                        <div className="shippingCost pricingDiv">
                                            <span>Shipping</span>
                                            <span>Free Delivery</span>
                                        </div>
                                        <div className="totalPriceLast pricingDiv">
                                            <span>Total</span>
                                            <span>₹{totalAmountAfterDiscount}</span>
                                        </div>
                                    </div>
                                    {/* toggleBetween CouponPage and normal page*/}
                                    {couponPageOpen ? <div className='couponPageMain'>
                                        <div className="couponPageHeading">
                                            <p className=' couponHeadingMain'>apply coupon/cashBack</p>
                                            <img src={CloseBtn} alt="" onClick={() => setCouponPageOpen(false)} />
                                        </div>
                                        <div className="couponInputBox">
                                            <TextField
                                                className='addressInput2'
                                                id="outlined-basic"
                                                label="Enter Discount CODE"
                                                variant="outlined"
                                                type="text"
                                                value={couponCode}
                                                size="small"
                                                required
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                InputLabelProps={{
                                                    style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "14.2px" }
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'black',
                                                            borderWidth: '0.2px'
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'black',
                                                    },
                                                }}
                                                inputProps={{
                                                    style: { textTransform: 'uppercase' }
                                                }}
                                                slotProps={{
                                                    input: {
                                                        startAdornment: <InputAdornment position="start"><img src={DiscountIcon} alt="" className='inputIconAdornment' /> </InputAdornment>,
                                                        endAdornment: <InputAdornment position='end'><span className='inputApplyBtn sortBtn' onClick={handleInvalidCouponCode}>APPLY</span></InputAdornment>
                                                    },
                                                }}
                                            />
                                        </div>
                                        <p className=' couponHeadingMain'>Payment Method Offers</p>
                                        <div className="couponsVariety">
                                            {couponsVariety.map((coupon, index) => {
                                                return <div className='singleCouponCodeDetails' key={index}>
                                                    <div className="singleCouponCodeDetailsTop">
                                                        {coupon.name}
                                                    </div>
                                                    <div className="singleCouponCodeDetailsBottom">
                                                        <div className="codeAndApplyBtn">
                                                            <span className='couponCode'>{coupon.code}</span>
                                                            <span
                                                                className={`couponApplyBtn ${appliedCoupons.length == 4 ? "disabledApplyCouponBtn" : ""}`}
                                                                onClick={() => handleCouponClick(coupon)}
                                                            >
                                                                {loader ? <div><Loader /></div> : "Apply"}
                                                            </span>
                                                        </div>
                                                        <span className='couponDescription'>{coupon.desc}</span>
                                                        <span className='couponTermsConditions'>Terms and Conditions</span>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                        :
                                        // normal page
                                        <div className="couponSection">
                                            <div className="pricingSection buyMoreSaveMoreCoupon applyCouponBtn applyCouponBtnMain" style={{ cursor: "pointer" }} onClick={() => setCouponPageOpen(true)}>
                                                <div className='pppp'>
                                                    <img src={DiscountIcon} alt="" />
                                                    <span> APPLY Coupon</span>
                                                </div>
                                                <img src={RightIcon} alt="" style={{ width: '16px', paddingRight: '10px' }} />
                                            </div>
                                            <p className='couponHeadingMain appliedCouponHeading'>
                                                <span>APPLIED COUPONS</span>
                                                <img src={DownArrow} alt="" />
                                            </p>
                                            {appliedCoupons.map((discount, index) => (
                                                <div className=" pricingSection buyMoreSaveMoreCoupon applyCouponBtn" key={index}>
                                                    <img src={discount.img} alt="" />
                                                    <span>{discount.name}</span>
                                                </div>
                                            ))}
                                        </div>}
                                </div>
                            </div>
                            <div className="pricingBottom">
                                <span >Secured by </span>
                                <img src={Ecom} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* RightPage Main */}
                    <div className="checkOutRightSideMain">
                        {couponPageOpenMini ?
                            // CouponMini Page
                            <div className='couponPageMain couponPageMini'>
                                <div className="couponPageHeading couponPageHeadingMini">
                                    <p className=' couponHeadingMain'>apply coupon/cashBack</p>
                                    <img src={CloseBtn} alt="" onClick={() => setCouponPageOpenMini(false)} />
                                </div>
                                <div className="couponInputBox couponInputBoxMini">
                                    <TextField
                                        className='addressInput2'
                                        id="outlined-basic"
                                        label="Enter Discount CODE"
                                        variant="outlined"
                                        type="text"
                                        value={couponCode}
                                        size="small"
                                        required
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        InputLabelProps={{
                                            style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "14.2px" }
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'black',
                                                    borderWidth: '0.2px'
                                                },
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: 'black',
                                            },
                                        }}
                                        inputProps={{
                                            style: { textTransform: 'uppercase' }
                                        }}
                                        slotProps={{
                                            input: {
                                                startAdornment: <InputAdornment position="start"><img src={DiscountIcon} alt="" className='inputIconAdornment' /> </InputAdornment>,
                                                endAdornment: <InputAdornment position='end'><span className='inputApplyBtn sortBtn' onClick={handleInvalidCouponCode}>APPLY</span></InputAdornment>
                                            },
                                        }}
                                    />
                                </div>
                                <div className="couponSection  couponSectionMini">
                                    <p className='couponHeadingMain appliedCouponHeading'>
                                        <span>APPLIED COUPONS</span>
                                        <img src={DownArrow} alt="" />
                                    </p>
                                    {appliedCoupons.map((discount, index) => (
                                        <div className=" pricingSection pricingSectionMini buyMoreSaveMoreCoupon applyCouponBtn" key={index}>
                                            <img src={discount.img} alt="" />
                                            <span>{discount.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className=' couponHeadingMain couponHeadingMainMini'>Payment Method Offers</p>
                                <div className="couponsVariety">
                                    {couponsVariety.map((coupon, index) => {
                                        return <div className='singleCouponCodeDetails' key={index}>
                                            <div className="singleCouponCodeDetailsTop">
                                                {coupon.name}
                                            </div>
                                            <div className="singleCouponCodeDetailsBottom">
                                                <div className="codeAndApplyBtn">
                                                    <span className='couponCode'>{coupon.code}</span>
                                                    <span
                                                        className={`couponApplyBtn ${appliedCoupons.length == 4 ? "disabledApplyCouponBtn" : ""}`}
                                                        onClick={() => handleCouponClick(coupon)}
                                                    >
                                                        {loader ? <div><Loader /></div> : "Apply"}
                                                    </span>
                                                </div>
                                                <span className='couponDescription'>{coupon.desc}</span>
                                                <span className='couponTermsConditions'>Terms and Conditions</span>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            :
                            // Normal Page
                            <div className="checkOutRightSideTop">
                                {/* RightSide Top */}
                                <div className="cartProductListTopSection">
                                    <div className="cartAndCLoseCart">
                                        <p className='accountWelcomeBellavita recommendationProductsCartPage backBtnOrText'><img src={BackBtn} alt="" onClick={() => setOpenCheckOutPage(false)} />
                                            <span>{document.body.offsetWidth < 750 ? "Order Summary" : "Back to cart"}</span>
                                        </p>
                                        <div className='cartCloseBtnDiv'>
                                            <img src={CloseBtn} alt="CLoseBtn" onClick={() => toggleDrawer(false)} />
                                        </div>
                                    </div>
                                    <div className="marqueeContainer">
                                        <div className="marqueeText">
                                            <span>Buy more save more 5% instant discount at checkout</span>
                                            <span>Buy more save more 5% instant discount at checkout</span>
                                            <span>Buy more save more 5% instant discount at checkout</span>
                                            <span>Buy more save more 5% instant discount at checkout</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='CheckOutItemsProductMain'>
                                    {cartItems.map((items, index) => {
                                        return <div className='cartItemsProduct' key={index}>
                                            <div className="cartItemProductTop">
                                                <div className="cartItemsProductImg" onClick={() => handleProductClick(items.id)}>
                                                    <img src={items.mainImg} alt="cartImg" />
                                                </div>
                                                <div className="cartItemsProductDetails">
                                                    <div className='cartSingleNameAndCloseBtn'>
                                                        <span className='cartItemSingleName' onClick={() => handleProductClick(items.id)}>{items.name}</span>
                                                    </div>
                                                    <div className='buyMoreSaveMore'>
                                                        <img src={Tag} alt="" />
                                                        <span>Buy More Save More</span>
                                                    </div>
                                                    <div className='buyMoreSaveMoreDiscount'>
                                                        <img src={GreenDownArrow} alt="" className='greenArrow' />
                                                        <span>{items.discount} Discount</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cartItemProductBottom">
                                                <div className="cartQuantityBtn QuantityAtCheckout">
                                                    <span className='itemQuantity'>Quantity {items.quantity}</span>
                                                </div>
                                                <div className="cartItemProductPrice">
                                                    <span className='cartItemProductPriceMrp'>{`₹${(parseFloat(items.mrp.replace(/[₹,]/g, '')) * items.quantity).toFixed(2)}`} </span>
                                                    <span className='cartItemProductPPrice'> {`₹${(parseFloat(items.price.replace(/[₹,]/g, '')) * items.quantity).toFixed(2)}`}  </span>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                                {/* checkOutMini */}
                                <div className="checkOutLeftSideMini">
                                    <div onClick={() => setCouponPageOpenMini(true)}>
                                        <span className='couponApplyBtn applyFilterAppliedFilter'>Apply Coupon & applied Coupons</span>
                                    </div>
                                    <div className="pricingSection priceSectionMini">
                                        <div className="subTotal  pricingDiv">
                                            <span>Subtotal</span>
                                            <span>₹{cartTotalAmount()}</span>
                                        </div>
                                        <div className="couponDiscount pricingDiv">
                                            <span>Buy More Save More - 5%</span>
                                            <span>- ₹{initialDiscountAmount()}</span>
                                        </div>
                                        <div className="couponDiscount pricingDiv">
                                            <span>Coupon Discount - {totalDiscountPercentage}%</span>
                                            <span>- ₹{couponDiscountAmount()}</span>
                                        </div>
                                        <div className="shippingCost pricingDiv">
                                            <span>Shipping</span>
                                            <span>Free Delivery</span>
                                        </div>
                                        <div className="totalPriceLast pricingDiv">
                                            <span>Total</span>
                                            <span>₹{totalAmountAfterDiscount}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkOutRightBottom">
                                    <p className='shippingText'>Tax included. <span className='shippingPolicyLinkText' onClick={() => navigate('/pages/shippingPolicy')} >Shipping</span> calculated at Payment Page.</p>
                                    <button className='filterBtn checkOutBtn' onClick={handlePaymentPage}>
                                        {btnLoader ? <div className='btnLoader'><Loader /></div> :
                                            "Go to Payment Page"
                                        }
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default CheckOutPage