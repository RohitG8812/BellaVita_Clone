import React, { useEffect, useState } from 'react'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import "../css/checkOut.css"
import Loader from '../pages/Loader';


function CheckOutPage({ setOpenCheckOutPage, cartItems, setCartItems }) {
    const [loader, setLoader] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 500);
    }, [])
    return (
        <div className='checkOutPageMain'>
            <div className="checkOutLeftSideMain">
                <div className="checkOutLeftSide">
                    leftSide
                </div>
            </div>
            <div className="checkOutRightSideMain">
                <div className="checkOutRightSide">
                    <div className="checkOutRightSideTop">
                        RightTop
                        <div className="checkOutLeftSideMini">
                            leftSideMini
                        </div>
                    </div>
                    <div className="checkOutRightBottom">
                        <p className='shippingText'>Tax included. <span className='shippingPolicyLinkText' onClick={() => navigate('/pages/shippingPolicy')} >Shipping</span> calculated at Payment Page.</p>
                        <button className='filterBtn checkOutBtn'>
                            {btnLoader ? <div className='btnLoader'><Loader /></div> :
                                "Continue"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage


{/* {loader ? <img src={SpinnerLoader} /> :
                <>
                    <div className="hhii">
                        CheckOutPage
                        <p onClick={() => setOpenCheckOutPage(false)}>Close</p>
                    </div>
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                                <img src={item.mainImg} alt="" />
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            } */}