import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderImg from "../assets/icons/ordersPage.svg"

function BellaCashInner() {
    const navigate = useNavigate()

    const handleAllProducts = () => {
        navigate('/collection/shopAll')
    }
    return (
        <div className='BellaCashMain'>
            <div className="bellaCashHeading">
                <p className='accountWelcomeBellavita'>Bella Cashback</p>
            </div>
            <div className="earnSpentCurr">
                <div className="bellaEarned bellaCashSingle bellaRightLine">
                    <span className='bellaText'>Earned</span>
                    <span className='bellaTextPrice'>₹0</span>
                </div>
                <div className="bellaSpent bellaCashSingle bellaRightLine bellaRightLineNone">
                    <span className='bellaText'>Spent</span>
                    <span className='bellaTextPrice'>₹0</span>
                </div>
                <div className="bellaCurr bellaCashSingle">
                    <span className='bellaText'>Current Cashback</span>
                    <span className='bellaTextPrice'>₹0</span>
                </div>
            </div>
            <div className="bellaCashRecentTr">
                <p className='accountWelcomeBellavita bellaCashRecentTrText'>Recent Transactions</p>
            </div>
            <div className='orderSectionMain bellaCashBottom'>
                <div className="orderSectionImg">
                    <img src={OrderImg} alt="" />
                </div>
                <div className="orderSectionText">
                    <p>You are missing out on taking advantage of</p>
                    <p>our Reward Program.</p>
                    <p>So why wait? Start shopping our products to start earning rewards.</p>
                </div>
                <div className="orderSecAllProductsBtn">
                    <button className='filterBtn orderSecBtn' onClick={handleAllProducts}>All Products</button>
                </div>
            </div>
        </div>
    )
}

export default BellaCashInner